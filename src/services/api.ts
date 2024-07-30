import client from "./client";

export const getCustomerAge = async (accessToken:any) => {
   const response = await client.get('https://ob.sandbox.natwest.com/zerocode/bankofapis.com/customer-age/v3/attributes/age',{
    headers : {
        Authorization : `Bearer ${accessToken}`
    }
   })
   return response.data;
}

export const getCustomerIdentity= async (accessToken:any) => {
    const response = await client.get('https://ob.sandbox.natwest.com/zerocode/bankofapis.com/customer-identity/v3/attributes/identity',{
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    });
    return response.data;
}

export const getCustomerCitizenship = async (accessToken:any) => {
    const response = await client.get(' https://ob.sandbox.natwest.com/zerocode/bankofapis.com/customer-citizenship/v3/attributes/citizenship',{
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    });
    return response.data;
}

export const getCreditScore = async () => {

}

//id "dfacca12375936129385823213addf"