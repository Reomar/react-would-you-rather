import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../_DATA'
import { ADD_QUESTION, FETCH_QUESTIONS, FETCH_USERS, LOGIN_USER, LOGOUT_USER, SAVE_ANSWER } from './actions'

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


/**
 * Shared Actions
 */

export const saveAnswerAction = (payload) => {
    return (dispatch) => {
        _saveQuestionAnswer(payload).then(() => {
            dispatch({
                type: SAVE_ANSWER,
                payload: payload
            })
        })
    }
}

export const addQuestionAction = (payload) => {
    return(dispatch) => {
        _saveQuestion(payload).then((res) =>{
            dispatch({
                type: ADD_QUESTION,
                payload: res
            })
        })
    }
}