import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { activeUserReducer } from "./reducers/activeUserReducer";
import { questionsReducer } from "./reducers/questionsReducer";
import { usersReducer } from "./reducers/usersReducers";

const reducers = combineReducers({
    activeUser: activeUserReducer,
    users: usersReducer,
    questions: questionsReducer,
})

const middleware = applyMiddleware(thunk)


export const store = createStore(reducers, middleware)