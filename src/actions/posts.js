import * as ApiUtil from '../utils/ApiUtil'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const SET_POSTS = 'SET_POSTS'
export const SET_POST = 'SET_POST'
export const SORT_BY_VOTES = 'SORT_BY_VOTES'
export const SORT_BY_TITLE = 'SORT_BY_TITLE'
export const SORT_BY_DATE = 'SORT_BY_DATE'

export const setPosts = posts => ({ type: SET_POSTS, posts })

export const setPost = post => ({ type: SET_POST, post })

export const upVotePost = id => ({ type: UP_VOTE_POST, id })

export const downVotePost = id => ({ type: DOWN_VOTE_POST, id })

export const sortByVotes = () => ({ type: SORT_BY_VOTES })

export const sortByTitle = () => ({ type: SORT_BY_TITLE })

export const sortByDate = () => ({ type: SORT_BY_DATE })



export const fetchPosts = () => dispatch => (
	ApiUtil
		.fetchPosts()
		.then(response => dispatch(setPosts(response.data)))
		.catch(error => {console.log(error)})
)



export const savePost = (post) => dispatch => (
	ApiUtil
		.savePost(post)
		.then(response => dispatch(setPost(response.data)))
		.catch(error => {console.log(error)})
)



export const deletePost = (id) => dispatch => (
	ApiUtil
		.deletePost(id)
		.then(response => dispatch(fetchPosts()))
		.catch(error => {console.log(error)})
)



export const fetchPost = (id) => dispatch => (
	ApiUtil
		.fetchPost(id)
		.then(response => dispatch(setPost(response.data)))
		.catch(error => {console.log(error)})
)



export const fetchPostsByCategory = (category) => dispatch => (
	ApiUtil
		.fetchPostsByCategory(category)
		.then(response => dispatch(setPosts(response.data)))
		.catch(error => {console.log(error)}
))



export const fetchUpVote = (id) => dispatch => (
	ApiUtil
		.fetchUpVote(id)
		.then(response => {
			return dispatch(upVotePost(response.data.id))
		})
		.catch(error => {console.log(error)})
)




export const fetchDownVote = (id) => dispatch => (
	ApiUtil
		.fetchDownVote(id)
		.then(response => {
			return dispatch(downVotePost(response.data.id))
		})
		.catch(error => {console.log(error)})
)