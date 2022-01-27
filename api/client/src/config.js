 import axios from "axios"

 export const axiosInstance = axios.create({
     baseURL : "https://uleamblog.herokuapp.com/api/"
 })