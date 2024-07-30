

import client from "./client";

export const getAffordability = async (payload:any) => {
   const response = await client.post(
   'https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts/mortgage-affordability-checks',
   payload
   ,
   {
      headers:{
         Authorization:`Bearer ${window.sessionStorage.getItem("accessToken")}`
      }
   }
   );
   return response;
}