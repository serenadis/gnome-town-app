import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "../store/reducers/profile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
            profileReducer
        }),
        composeEnhancers(applyMiddleware(thunk))

    );

    return store;
};
