import {
	SET_POST_COMMENTS,
} from '../actions/comments'


const INITIAL_STATE = {
  postComments: []
}

export default function comments(state=INITIAL_STATE, action) {
	switch(action.type) {
		case SET_POST_COMMENTS:
			return {
				...state,
				postComments: action.postComments
			}
		default:
			return state
	}
}