import axiosInstance from './AxiosUtil'

export const fetchPosts = () => axiosInstance.get('/posts')

export const fetchPost = (id) => axiosInstance.get(`/posts/${id}`)

export const savePost = (post) => axiosInstance.post('/posts', post)

export const deletePost = (id) => axiosInstance.delete(`/posts/${id}`)

export const fetchPostsByCategory = (category) => axiosInstance.get(`/${category}/posts`)

export const fetchCategories = () => axiosInstance.get('/categories')

export const fetchUpVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'upVote'})

export const fetchDownVote = (id) => axiosInstance.post(`/posts/${id}`, {'option': 'downVote'})

export const fetchUpVoteComment = (id) => axiosInstance.post(`/comments/${id}`, {'option': 'upVote'})

export const fetchDownVoteComment = (id) => axiosInstance.post(`/comments/${id}`, {'option': 'downVote'})

export const fetchPostComments = (id) => axiosInstance.get(`/posts/${id}/comments`)

export const saveComment = (comment) => axiosInstance.post(`/comments`, comment)

export const deleteComment = (id) => axiosInstance.delete(`/comments/${id}`)