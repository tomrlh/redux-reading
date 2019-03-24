import axiosInstance from 'AxiosUtil'

export const upVote = (id) =>
  axiosInstance.post(`posts/${id}`, { option: 'upVote' })
    .then(response => {
    	console.log(response)
    })
    .catch(error => {
    	console.log(error)
    })



export const downVote = (id) =>
  axiosInstance.post(`posts/${id}`, { option: 'downVote' })
    .then(response => {
    	console.log(response)
    })
    .catch(error => {
    	console.log(error)
    })