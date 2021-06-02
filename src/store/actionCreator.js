import { _getUsers } from '../_DATA'
import { FETCH_USERS } from './actions'

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

/**
 * Questions Actions
 */