import {useMutation} from "@tanstack/react-query";
import { getAffordability } from "../services/affordability";

export const useAffordability = () => {
    const mutation = useMutation({
     mutationFn: async () => {
           const response =  await getAffordability();
           return response.data;
        }
    });
    return mutation;
}