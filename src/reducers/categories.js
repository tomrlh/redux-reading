import { RECEIVE_CATEGORIES, SET_SELECTED_CATEGORY } from '../actions/categories'

const INITIAL_STATE = {
  selectedCategory: 'all'
}

export default function categories(state=INITIAL_STATE, action) {
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			return {
				...state,
				allCategories: action.categories
			}
		case SET_SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: action.category
			}
		default:
			return state
	}
}