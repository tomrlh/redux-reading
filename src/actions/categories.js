import * as ApiUtil from '../utils/ApiUtil'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

export const receiveCategories = categories => ({ type: RECEIVE_CATEGORIES, categories })
export const setSelectedCategory = category => ({ type: SET_SELECTED_CATEGORY, category })

export const fetchCategories = () => dispatch => (
  ApiUtil
	.fetchCategories()
	.then(categories => dispatch(receiveCategories(categories.data.categories)))
	.catch(error => { console.log(error) })
)



export const checkLogin = (email, password) => (dispatch) => Promise.resolve().then(() => {
    // dispatch(loginRequest())
    try {
        if (email.trim() === "test123@nomail.com" && password === "123456") {
            const session = { token: "abc1234", email: email, username: "test123" }
            // AsyncStorage.setItem(DATA_SESSION, JSON.stringify(session))
        	return {'loginStatus': true, session}
        }
        else
            return {'loginStatus': false}
    }
    catch (err) {
        console.log(err)
        // return dispatch(loginFailed("Something went wrong"))
    }
})