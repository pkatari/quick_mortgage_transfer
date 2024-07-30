import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import { listCarousel } from "../../mockData/mockData";
import {useAffordability} from "../../hooks/useAffordability";
import "./PropertyDetails.scss";

export const PropertyDetails = () => {
  const params = useParams();
  const id: any = params?.id;
  const imageCarouselData = listCarousel.find((listCarousel) => {
    return listCarousel.id === +id;
  });
  const outstandingBalance: number =
    imageCarouselData && imageCarouselData.outstandingBalance
      ? +imageCarouselData.outstandingBalance.replaceAll(",", "")
      : 0;
  const navigate = useNavigate();
  const timerRef: any = useRef(null);
  const [termPeriod, setTermPeriod] = useState<number>(
    imageCarouselData && imageCarouselData.loanPeriod
      ? +imageCarouselData.loanPeriod
      : 0
  );
  const [isSendQuote, setIsSendQuote] = useState<boolean>(false);
  const [isInterestClick, setIsInterestClick] = useState(false);
  const [isStatusChanged, setIsStatusChanged] = useState<boolean>(false);
  const [loanAmount, setLoanAmount] = useState<number>(outstandingBalance);
  const [isDecision,setIsDecision] = useState<boolean>(true);
  const [quoteMessage, setQuoteMessage] = useState<string>(
    "Quotation has been sent to Seller for review."
  );
  const { mutate: getAffordability } = useAffordability({
    onSuccess: (data: any) => {
      setIsDecision(data.decision);
    },
  });
  const sendQuotation = () => {
    getAffordability({
      "amount": loanAmount,
      "interestRate": imageCarouselData && imageCarouselData.newInterestRate ? +imageCarouselData.newInterestRate : 0,
      "numberOfMonths": termPeriod * 12,
      "type": "NORMAL" 
    });
    timerRef.current = setTimeout(() => {
      setQuoteMessage("Congratulations Seller has accepted your quotation.");
      setIsStatusChanged(true);
    }, 3000);
    setIsSendQuote(true);
  };

  const onInterestClick = () => {
    setIsInterestClick(true);
  }

  const calulateMonthlyEmi = () => {
    const monthlyInterestRate =
      imageCarouselData && imageCarouselData.newInterestRate
        ? +imageCarouselData.newInterestRate / 12 / 100
        : 0;
    const loanTerm = +termPeriod * 12;
    const numerator =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTerm);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1;
    return numerator / denominator;
  };

  const transferMortgage = () => {
    navigate("/quickmortgage");
  };
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <div className="propertyDetails">
      <div className="details">
        <div className="wrapper">
          <ImageCarousel images={imageCarouselData?.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1 style={{color:"#5a287d"}}>{imageCarouselData?.title}</h1>
                <div className="address">
                  <span>{imageCarouselData?.address}</span>
                </div>
                <div className="sizes">
                  <div className="size">£ {imageCarouselData?.price}</div>
                  <div className="size">{imageCarouselData?.area}</div>
                  <div className="size">{imageCarouselData?.bedRooms} BHK</div>
                  <div className="size">{imageCarouselData?.builtUp}</div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h3 style={{color:"#5a287d"}}>About this Property</h3>
              <div>{imageCarouselData?.description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          {imageCarouselData?.isMortgage ? (
            <>
              <h1 className="title">Offer Applicable</h1>
              <div className="feature">
                <div className="featureText">
                  Congrats you and seller both are Natwest Customers and are eligible for Quick Mortgage transfer.
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="listVertical">
                  <h2 style={{ fontSize: "20px", fontWeight: 600,color:"#5a287d" }}>
                    Seller Mortgage Details
                  </h2>
                  <div>
                    <div style={{ fontSize: "18px" }}>
                      Outstanding Loan Amount
                    </div>
                    <span
                      style={{
                        backgroundColor: "whitesmoke",
                        borderRadius: "5px",
                      }}
                    >
                      £ {imageCarouselData?.outstandingBalance}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px" }}>Interest Rate (%)</div>
                    <span
                      style={{
                        backgroundColor: "whitesmoke",
                        borderRadius: "5px",
                      }}
                    >
                      {imageCarouselData?.interestRate}%
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px" }}>Term Length (Yrs)</div>
                    <span
                      style={{
                        backgroundColor: "whitesmoke",
                        borderRadius: "5px",
                      }}
                    >
                      {imageCarouselData?.loanPeriod}
                    </span>
                  </div>
                </div>

                <div className="listVertical">
                  <h2 style={{ fontSize: "20px", fontWeight: 600,color:"#5a287d" }}>
                    New Mortgage Quotation
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "18px",
                      flexDirection: "column",
                    }}
                  >
                    <label htmlFor="loanAmount">Loan Amount (£)</label>
                    <input
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(+e.target.value)}
                      placeholder="Loan Amount"
                      required
                      id="loanAmount"
                      name="loanAmount"
                      readOnly={isSendQuote}
                      className="mortgageForm"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                    }}
                  >
                    <label htmlFor="interestRate">Interest Rate (%)</label>
                    <input
                      type="number"
                      value={+imageCarouselData?.newInterestRate}
                      readOnly
                      placeholder="Interest Rate"
                      id="interestRate"
                      name="interestRate"
                      className="mortgageForm"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                    }}
                  >
                    <label htmlFor="termLengthNew">Loan Term (Yrs)</label>
                    <input
                      type="text"
                      value={termPeriod}
                      onChange={(e) => setTermPeriod(+e.target.value)}
                      placeholder="Loan Term"
                      required
                      id="termLengthNew"
                      name="termLengthNew"
                      readOnly={isSendQuote}
                      className="mortgageForm"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                    }}
                  >
                    <label htmlFor="monthlyPayment">Monthly EMI (£)</label>
                    <input
                      type="number"
                      value={calulateMonthlyEmi().toFixed(2)}
                      placeholder="Monthly EMI"
                      readOnly
                      id="monthlyPayment"
                      name="monthlyPayment"
                      className="mortgageForm"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button disabled={isSendQuote || !isInterestClick || !isDecision} onClick={sendQuotation}>
                  Ask for Seller consent
                </button>
                <button>Seller Contact</button>
                <button disabled={isSendQuote} onClick={onInterestClick}>Interested</button>
              </div>
              {isSendQuote ? (
                <div style={{marginTop:"10px",color:"#B30000",fontSize:"20px"}}>
                  {quoteMessage}
                </div>
              ) : null}
              {isStatusChanged ? (
                <button style={{ width: "300px" }} onClick={transferMortgage}>
                  Proceed to transfer Mortgage
                </button>
              ) : null}
            </>
          ) : (
            <div style={{ marginTop: "10rem" }}>
              <button style={{ marginBottom: "2rem" }}>Seller Contact</button>
              <button>Interested</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
