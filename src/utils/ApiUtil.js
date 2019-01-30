import axiosInstance from './AxiosUtil'

export const fetchPosts = () => axiosInstance.get('/posts')