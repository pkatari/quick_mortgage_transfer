import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import {
  useConsentId,
  useToken,
  useConsentAuth,
  useExchangeCode,
} from "../../hooks/useToken";
import {
  useCustomerCitizenship,
  useCustomerIdentity,
  useAge,
} from "../../hooks/useCustomer";
import { getParamValue } from "../../utils/common";
import "./MainLayout.scss";

export const MainLayout = () => {
  const { state } = useLocation();
  const [consentId, setConsentId] = useState(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [isEnabledCustomer, setIsEnabledCustomer] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState("");
  const { data: citizenship } = useCustomerCitizenship(
    accessToken,
    isEnabledCustomer
  );
  const { data: age } = useAge(accessToken, isEnabledCustomer);
  const { data: identity } = useCustomerIdentity(
    accessToken,
    isEnabledCustomer
  );

  const { mutate: getConsentId } = useConsentId({
    onSuccess: (data: any) => {
      setConsentId(data.Data.ConsentId);
      setIsEnabled(true);
    },
  });
  const { mutate: getAccessToken } = useToken({
    onSuccess: (data: any) => {
      getConsentId(data.access_token);
    },
  });
  const { data: authConsent, isSuccess: isSuccessConsentAuth } = useConsentAuth(
    consentId,
    isEnabled
  );

  const { mutate: getExchangeCode } = useExchangeCode({
    onSuccess: (data: any) => {
      setAccessToken(data.access_token);
      window.sessionStorage.setItem("accessToken",data.access_token);
      setIsEnabledCustomer(true);
    },
  });

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  useEffect(() => {
    if (isSuccessConsentAuth) {
      const code = getParamValue(authConsent.redirectUri);
      getExchangeCode({
        code,
      });
    }
  }, [isSuccessConsentAuth]);
  return (
    <div className="layout">
      <div className="navbar">
        <Header isLogin={state && state.isLogin} />
      </div>
      <div className="content">
        <Outlet context={[age, citizenship, identity]} />
      </div>
    </div>
  );
};
