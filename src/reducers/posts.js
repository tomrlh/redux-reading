import { 
	UP_VOTE_POST, 
	DOWN_VOTE_POST, 
	RECEIVE_POSTS,
	SORT_BY_VOTES,
	SORT_BY_TITLE
} from '../actions/posts'

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
		case SORT_BY_VOTES:
			return {
				...state,
				posts: state.posts.sort((a, b) => b.voteScore - a.voteScore)
			}
		case SORT_BY_TITLE:
			return {
				...state,
				posts: state.posts.sort((a, b) => {
					if (a.title > b.title) return 1
					if (a.title < b.title)return -1
					return 0
				})
			}
		default:
			return state
	}
}