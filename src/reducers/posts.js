import { UP_VOTE, DOWN_VOTE, RECEIVE_POSTS } from '../actions/posts'

export default function posts(state={}, action) {
	switch(action.type) {
		case UP_VOTE:
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.id
					? post.voteScore++
					: post
				)
			}
		case DOWN_VOTE:
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.id
					? post.voteScore--
					: post
				)
			}
		case RECEIVE_POSTS:
			return {
				...state,
				posts: action.posts
			}
		default:
			return state
	}
}