import {
	RECEIVE_CATEGORIES,
	SET_ACTIVE_CATEGORY
} from '../actions/categories'

const INITIAL_STATE = {
	allCategories: [],
	activeCategory: 'all'
}

export default function categories(state=INITIAL_STATE, action) {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return {
				...state,
				allCategories: action.categories
			}
		case SET_ACTIVE_CATEGORY:
			return {
				...state,
				activeCategory: action.activeCategory
			}
		default:
			return state
	}
}