import { ADD_QUESTION, FETCH_USERS, SAVE_ANSWER } from "../actions"


const initialState = {}

export function usersReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            return action.payload
        case SAVE_ANSWER:
            return {
                ...state,
                [action.payload.authedUser]:{
                    ...state[action.payload.authedUser],
                    answers:{
                        ...state[action.payload.authedUser].answers,
                        [action.payload.qid]: action.payload.answer
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.payload.author]:{
                    ...state[action.payload.author],
                    questions: [
                        ...state[action.payload.author].questions,
                        action.payload.id
                    ]
                }
            }
        default:
            return state
    }
}