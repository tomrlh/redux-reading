import {
	UP_VOTE_POST,
	DOWN_VOTE_POST,
	SET_POSTS,
	SET_POST,
	SORT_BY_VOTES,
	SORT_BY_TITLE,
	SORT_BY_DATE
} from '../actions/posts'

const INITIAL_STATE = {
  allPosts: [],
  post: {}
}

export default function posts(state=INITIAL_STATE, action) {
	switch(action.type) {
		case UP_VOTE_POST:
			return {
				...state,
				allPosts: [...state.posts].map(post => {
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
				allPosts: [...state.posts].map(post => {
					if(post.id === action.id) {
						post.voteScore -= 1
						return post
					}
					else return post
				})
			}
		case SET_POSTS:
			return {
				...state,
				allPosts: action.posts
			}
		case SET_POST:
			return {
				...state,
				postDetail: action.post
			}
		case SORT_BY_VOTES:
			return {
				...state,
				allPosts: [...state.posts].sort((a, b) => b.voteScore - a.voteScore)
			}
		case SORT_BY_TITLE:
			return {
				...state,
				allPosts: [...state.posts].sort((a, b) => {
					if (a.title > b.title) return 1
					if (a.title < b.title)return -1
					return 0
				})
			}
		case SORT_BY_DATE:
			return {
				...state,
				allPosts: [...state.posts].sort((a, b) => b.timestamp - a.timestamp)
			}
		default:
			return state
	}
}