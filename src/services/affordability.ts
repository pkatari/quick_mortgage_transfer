

import client from "./client";

export const getAffordability = async () => {
    const response = await client.post(
 'https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts/mortgage-affordability-checks',
 {
    "amount": 100000.00,
    "interestRate": 5.45,
    "numberOfMonths": 120.00,
    "type": "NORMAL" 
 }
    );
    return response;
}