import { ADD_QUESTION, LOGIN_USER, LOGOUT_USER, SAVE_ANSWER } from "../actions";

const initialState =  null

export function activeUserReducer (state = initialState, action){
    switch (action.type) {
        case LOGIN_USER:
            return action.payload
        case LOGOUT_USER:
            return null
        case SAVE_ANSWER:
            return {
                ...state,
                answers:{
                    ...state.answers,
                    [action.payload.qid]: action.payload.answer
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                questions:[...state.questions, action.payload.id]
            }
        default:
            return state
    }
}