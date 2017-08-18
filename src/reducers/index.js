import Immutable from "immutable";
import * as actionTypes from "../constants/actionTypes";
//import _ from "lodash";

export const $$initialState = Immutable.fromJS({
    hello: null
});

const hello = (state, action) => {
    return state.updateIn(["hello"], value => action.words);
};

export default function rootReducer($$state = $$initialState, action = null) {
    switch (action.type) {
        case actionTypes.HELLO: {
            return hello($$state, action);
        }
        default: {
            return $$state;
        }
    }
}