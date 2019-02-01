import axiosInstance from './AxiosUtil'

export const fetchPosts = () => axiosInstance.get('/posts')

export const fetchCategories = () => axiosInstance.get('/categories')

export const fetchUpVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'upVote'})

export const fetchDownVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'downVote'})


