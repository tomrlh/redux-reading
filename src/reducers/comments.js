import {
	SET_POST_COMMENTS,
	UP_VOTE_COMMENT,
	DOWN_VOTE_COMMENT
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
		case UP_VOTE_COMMENT:
			return {
				...state,
				postComments: [...state.postComments].map(comment => {
					if(comment.id === action.id) {
						comment.voteScore += 1
						return comment
					}
					else return comment
				})
			}
		case DOWN_VOTE_COMMENT:
			return {
				...state,
				postComments: [...state.postComments].map(comment => {
					if(comment.id === action.id) {
						comment.voteScore -= 1
						return comment
					}
					else return comment
				})
			}
		default:
			return state
	}
}