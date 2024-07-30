import {useMutation} from "@tanstack/react-query";
import { getAffordability } from "../services/affordability";

export const useAffordability = (options={}) => {
    const mutation = useMutation({
        ...options,
       mutationFn: async (payload:any) => {
           const response =  await getAffordability(payload);
           return response.data;
        }
    });
    return mutation;
}