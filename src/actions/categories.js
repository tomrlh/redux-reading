import * as ApiUtil from '../utils/ApiUtil'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'

export const receiveCategories = categories => ({ type: RECEIVE_CATEGORIES, categories })

export const setActiveCategory = category => ({ type: SET_ACTIVE_CATEGORY, category })

export const fetchCategories = () => dispatch => (
  ApiUtil
	.fetchCategories()
	.then(categories => dispatch(receiveCategories(categories.data.categories)))
	.catch(error => { console.log(error) })
)