import { _getUsers } from '../_DATA'
import { FETCH_USERS, LOGIN_USER } from './actions'

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

/**
 * Questions Actions
 */