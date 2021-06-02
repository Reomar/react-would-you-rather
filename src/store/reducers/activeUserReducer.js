import { LOGIN_USER, LOGOUT_USER } from "../actions";

const initialState =  null

export function activeUserReducer (state = initialState, action){
    switch (action.type) {
        case LOGIN_USER:
            return {activeUserReducer: action.payload}
        case LOGOUT_USER:
            return null
        default:
            return state
    }
}