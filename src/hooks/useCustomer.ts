
import {useQuery} from "@tanstack/react-query";
import { getCustomerAge, getCustomerCitizenship, getCustomerIdentity } from "../services/api";

export const useAge = (accessToken:any,isEnabled:boolean) => {
    const query = useQuery({
        queryKey: ['age'],
        queryFn : () => getCustomerAge(accessToken),
        enabled:isEnabled
    });
    return query;
}

export const useCustomerIdentity = (accessToken:any,isEnabled:boolean) => {
    const query = useQuery({
        queryKey: ['identity'],
        queryFn : () => getCustomerIdentity(accessToken),
        enabled:isEnabled
    });
    return query;
}


export const useCustomerCitizenship = (accessToken:any,isEnabled:boolean) => {
    const query = useQuery({
        queryKey: ['citizenship'],
        queryFn : () => getCustomerCitizenship(accessToken),
        enabled:isEnabled
    });
    return query;
}

