import axios from "axios";

const client = axios.create({
    baseURL: ""
})

/* client.interceptors.request.use((config:any) => {
    const accessToken = window.sessionStorage.getItem("access_token");
    config.headers.Authorization = `Bearer ${accessToken}`
    return config;
}); */

export default client;