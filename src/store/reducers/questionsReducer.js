import { ADD_QUESTION, FETCH_QUESTIONS, SAVE_ANSWER } from "../actions"

const initialState = {}

export function questionsReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_QUESTIONS:
            return action.payload
        case SAVE_ANSWER:
            const {authedUser, qid, answer} = action.payload
            return {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            }

        case ADD_QUESTION:
            return {
                [action.payload.id]:{
                    ...action.payload
                },
                ...state,

            }
        default:
            return state
    }
}