import * as ApiUtil from '../utils/ApiUtil'

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_COMMENT = 'SET_COMMENT'

export const setPostComments = postComments => ({ type: SET_POST_COMMENTS, postComments })

export const setComment = comment => ({ type: SET_COMMENT, comment })



export const fetchPostComments = (id) => dispatch => (
	ApiUtil
		.fetchPostComments(id)
		.then(response => dispatch(setPostComments(response.data)))
		.catch(error => {console.log(error)})
)



export const addComment = (comment) => dispatch => (
	ApiUtil
		.addComment(comment)
		.then(response => dispatch(fetchPostComments(response.data.parentId)))
		.catch(error => {console.log(error)})
)