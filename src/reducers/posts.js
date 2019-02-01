import { UP_VOTE_POST, DOWN_VOTE_POST, RECEIVE_POSTS } from '../actions/posts'

export default function posts(state={}, action) {
	switch(action.type) {
		case UP_VOTE_POST:
			return {
				...state,
				posts: state.posts.map(post => {
					if(post.id === action.id) {
						post.voteScore += 1
						return post
					}
					else return post
				})
			}
		case DOWN_VOTE_POST:
			return {
				...state,
				posts: state.posts.map(post => {
					if(post.id === action.id) {
						post.voteScore -= 1
						return post
					}
					else return post
				})
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