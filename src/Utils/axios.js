import axios from 'axios'

// const serverUrl = process.env.REACT_APP_SERVER_BASE_URL
const serverUrl = 'http://localhost:8080'


const createAxiosClient = (baseUrl) => {
    const client = axios.create(
        {
            baseURL : baseUrl,
            timeout : 5000,
            timeoutErrorMessage : "Request timeout... Please try again"
        }
    )
    return client
}

const attachToken = (req , tokenName) => {
    const authToken = localStorage.getItem(tokenName)
    if(authToken){
        req.headers.Authorization = `Bearer ${authToken}`
    }
    return req
}

const axiosInstance = createAxiosClient(serverUrl)
axiosInstance.interceptors.request.use(async (req) => {
    const modifiedReq = attachToken(req , 'userJWt')
    return modifiedReq
})

export default axiosInstance