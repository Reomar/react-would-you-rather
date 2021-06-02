import { FETCH_USERS } from "../actions"


const initialState = {}

export function usersReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            return action.payload
        default:
            return state
    }
}