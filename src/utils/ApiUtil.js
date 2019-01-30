import axiosInstance from './AxiosUtil'

export const fetchPosts = () => axiosInstance.get('/posts')

export const fetchCategories = () => axiosInstance.get('/categories')