
export const checkIfMortgageExists = (mortgageType:any,item:any,customerData:any) => {
    if(mortgageType ==="inmortgage") {
        if(item.isMortgage && customerData[0]?.data[0]?.age >= 18 && customerData[1]?.data?.country_of_nationality === "GB") {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

export const getParamValue = (url:any) => {
    return url.split("&")[0].split("=")[1];
}