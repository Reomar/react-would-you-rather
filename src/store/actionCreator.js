import { _getUsers, _getQuestions } from '../_DATA'
import { FETCH_QUESTIONS, FETCH_USERS, LOGIN_USER, LOGOUT_USER } from './actions'

/**
 * Users Actions
 */
export const fetchUsersAction = () => {
    return (dispatch) => {
        _getUsers().then(res => {
            dispatch({
                type: FETCH_USERS,
                payload: res
            })
        })
    }
}

/**
 * Login Actions
 */
export const loginAction = (usr)=>({
    type: LOGIN_USER,
    payload: usr
})

export const logoutAction = () => ({
    type: LOGOUT_USER
})

/**
 * Questions Actions
 */
export const fetchQuestionsAction = () => {
    return (dispatch) => {
        _getQuestions().then( res => {
            dispatch({
                type: FETCH_QUESTIONS,
                payload: res
            })
        })
    }
}