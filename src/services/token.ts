import axios from 'axios';

export const getToken = async () => {
    const response = await axios.post(
 'https://ob.sandbox.natwest.com/token',
 {
    scope:"accounts",
    grant_type:"client_credentials",
    client_id: "DEpYYyNvC6O9DP-xWZ1uBQlTYvtzjqH0zQM9mjXJ5Bk=",
    client_secret: "8GntwFyPhwCB4mJr7TvrXJRyBgqocA0Ic0XJlIA9oHE="
 },
 {
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
    }
 }
    );
    return response.data;
}

export const getConsentId = async (accessToken :any) => {
   const response = await axios.post(
      'https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/account-access-consents?scope=accounts',
      {
         "Data": {
           "Permissions": [
             "ReadAccountsBasic",
             "VerifyMortgageAffordability"
           ]
         },
         "Risk": {}
       },
      {
         headers : {
             "Content-Type" : "application/json",
             "Authorization" :`Bearer ${accessToken}`
         }
      }
         );
         return response.data;
}

export const getAuthorizeConsent = async (consentId:any) => {
   const response = await axios.get(`https://api.sandbox.natwest.com/authorize?client_id=DEpYYyNvC6O9DP-xWZ1uBQlTYvtzjqH0zQM9mjXJ5Bk=&response_type=code id_token &scope=openid accounts &redirect_uri=https://google.com&request=${consentId}&authorization_mode=AUTO_POSTMAN&authorization_result=APPROVED&authorization_username=123456789012@quickmortage.com`);
   return response.data;
}

export const getExchangeCode = async (payload:any) :Promise<any> => {
   const response = await axios.post(
      'https://ob.sandbox.natwest.com/token',
      {
        client_id:'DEpYYyNvC6O9DP-xWZ1uBQlTYvtzjqH0zQM9mjXJ5Bk=',
        client_secret:"8GntwFyPhwCB4mJr7TvrXJRyBgqocA0Ic0XJlIA9oHE=",
        redirect_uri:'https://google.com',
        grant_type:"authorization_code",
        code :payload.code
       },
       {
         headers : {
             "Content-Type" : "application/x-www-form-urlencoded",
         }
      }
         );
         return response.data;
}