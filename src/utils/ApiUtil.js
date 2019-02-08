import axiosInstance from './AxiosUtil'

export const fetchPosts = () => axiosInstance.get('/posts')

export const fetchPost = (id) => axiosInstance.get(`/posts/${id}`)

export const fetchPostsByCategory = (category) => axiosInstance.get(`/${category}/posts`)

export const fetchCategories = () => axiosInstance.get('/categories')

export const fetchUpVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'upVote'})

export const fetchDownVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'downVote'})

export const fetchPostComments = (id) => axiosInstance.get(`/posts/${id}/comments`)

export const addComment = (comment) => axiosInstance.post(`/comments`, comment)

export const deleteComment = (id) => axiosInstance.delete(`/comments/${id}`)