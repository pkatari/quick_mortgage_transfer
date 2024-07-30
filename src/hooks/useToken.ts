import {useMutation, useQuery} from "@tanstack/react-query";
import { getConsentId, getToken,getAuthorizeConsent,getExchangeCode } from "../services/token";

export const useToken = (options={}) => {
    const mutation = useMutation({
        ...options,
        mutationFn: async () => {
            return await getToken();
        }
    });
    return mutation;
}


export const useConsentId = (options={}) => {
    const mutation = useMutation({
        ...options,
        mutationFn: async (acessToken) => {
            return await getConsentId(acessToken);
        }
    });
    return mutation;
}

export const useConsentAuth = (consentId:any,isEnabled:boolean) => {
    const query = useQuery({
        queryKey: ['consentauth'],
        queryFn : () => getAuthorizeConsent(consentId),
        enabled:isEnabled
    });
    return query;
}

export const useExchangeCode = (options={}) => {
    const mutation = useMutation({
        ...options,
        mutationFn: async (payload:any) => {
            return await getExchangeCode(payload);
        }
    });
    return mutation;
}