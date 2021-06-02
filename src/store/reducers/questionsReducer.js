import { FETCH_QUESTIONS } from "../actions"

const initialState = {}

export function questionsReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_QUESTIONS:
            return action.payload
        default:
            return state
    }
}