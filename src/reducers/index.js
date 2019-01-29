import { combineReducers } from 'redux'
import { UP_VOTE, DOWN_VOTE } from '../actions'

const initialState = {
	posts: [],
	categories: []
}


function postReducer(state=initialState, action) {
	switch(action.type) {
		case 'UP_VOTE':
			return {
				...state,
				posts: state.posts.map(post =>
					post.id == action.id
					? post.voteScore++
					: post
				)
			}
		case 'DOWN_VOTE':
			return {
				...state,
				posts: state.posts.map(post =>
					post.id == action.id
					? post.voteScore--
					: post
				)
			}
		default:
			return state
	}
}



export default combineReducers({
	postReducer
})