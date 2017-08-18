import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./../utils/reduxLoggerMiddleware";
import api from "./../api";
import reducer from "./../reducers";

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware.withExtraArgument({ api }),
        loggerMiddleware
    )
);

export default store;