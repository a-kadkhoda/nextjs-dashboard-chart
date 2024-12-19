import { productBaseUrl } from "@/shared/consts";
import axios, { AxiosInstance } from "axios";





const instance :AxiosInstance = axios.create({
    baseURL : productBaseUrl,

    timeout: 10000,
    headers :{
        "Content-Type" : "application/json"
    }

})




export default instance