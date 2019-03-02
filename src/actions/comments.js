import * as ApiUtil from '../utils/ApiUtil'

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_COMMENT = 'SET_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

export const setPostComments = postComments => ({ type: SET_POST_COMMENTS, postComments })

export const setComment = comment => ({ type: SET_COMMENT, comment })

export const upVoteComment = id => ({ type: UP_VOTE_COMMENT, id })

export const downVoteComment = id => ({ type: DOWN_VOTE_COMMENT, id })



export const fetchPostComments = (id) => dispatch => (
	ApiUtil
		.fetchPostComments(id)
		.then(response => dispatch(setPostComments(response.data)))
		.catch(error => {console.log(error)})
)



export const saveComment = (comment) => dispatch => (
	ApiUtil
		.saveComment(comment)
		.then(response => dispatch(fetchPostComments(response.data.parentId)))
		.catch(error => {console.log(error)})
)



export const deleteComment = (id) => dispatch => (
	ApiUtil
		.deleteComment(id)
		.then(response => dispatch(fetchPostComments()))
		.catch(error => {console.log(error)})
)



export const fetchUpVoteComment = (id) => dispatch => (
	ApiUtil
		.fetchUpVoteComment(id)
		.then(response => {dispatch(upVoteComment(response.data.id))})
		.catch(error => {console.log(error)})
)



export const fetchDownVoteComment = (id) => dispatch => (
	ApiUtil
		.fetchDownVoteComment(id)
		.then(response => {dispatch(downVoteComment(response.data.id))})
		.catch(error => {console.log(error)})
)