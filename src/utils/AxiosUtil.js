import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: `http://localhost:3005`
})

axiosInstance.defaults.headers.common['Authorization'] = 'redux-reading'

export default axiosInstance