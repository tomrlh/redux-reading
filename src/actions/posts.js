import * as ApiUtil from '../utils/ApiUtil'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SORT_BY_VOTES = 'SORT_BY_VOTES'
export const SORT_BY_TITLE = 'SORT_BY_TITLE'

export const receivePosts = posts => ({ type: RECEIVE_POSTS, posts })

export const upVotePost = id => ({ type: UP_VOTE_POST, id })

export const downVotePost = id => ({ type: DOWN_VOTE_POST, id })

export const sortByVotes = posts => ({ type: SORT_BY_VOTES })

export const sortByTitle = posts => ({ type: SORT_BY_TITLE })



export const fetchPosts = () => dispatch => (
	ApiUtil
		.fetchPosts()
		.then(posts => dispatch(receivePosts(posts.data)))
		.catch(error => { console.log(error) })
)


export const fetchUpVote = (id) => dispatch => (
	ApiUtil
		.fetchUpVote(id)
		.then(response => {
			return dispatch(upVotePost(response.data.id))
		})
		.catch(error => { console.log(error) })
)




export const fetchDownVote = (id) => dispatch => (
	ApiUtil
		.fetchDownVote(id)
		.then(response => {
			return dispatch(downVotePost(response.data.id))
		})
		.catch(error => { console.log(error) })
)