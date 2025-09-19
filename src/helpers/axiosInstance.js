
import axios from 'axios'
import { CoinGeco_Api_Url } from './Constant-Api'

const axiosInstance = axios.create({
    baseURL: CoinGeco_Api_Url,
})

export default axiosInstance;