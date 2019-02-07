import * as ApiUtil from '../utils/ApiUtil'

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS'

export const setPostComments = postComments => ({ type: SET_POST_COMMENTS, postComments })



export const fetchPostComments = (id) => dispatch => (
	ApiUtil
		.fetchPostComments(id)
		.then(comments => dispatch(setPostComments(comments.data)))
		.catch(error => {console.log(error)})
)