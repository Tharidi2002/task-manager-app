import axios from "axios"

const api = axios.create({
  baseURL: "https://689f094c3fed484cf878cff9.mockapi.io/ap/v1",
  timeout: 10000
})

api.interceptors.request.use(async (config:any) => {
    // config.headers.Authorization = `Bearer ${token}` 
  return config
})

api.interceptors.response.use(async (config:any) => {
  // 
  return config
})

export default api
