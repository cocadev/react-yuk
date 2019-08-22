import * as types from "./actionTypes";

const initialState = {
    data:null,
    loading:false,

};

export default function common(state = initialState, action = {}) {
    switch (action.type) {

        case types.SET_DATA:
            return {
                ...state,
                type: types.SET_DATA,
                data: action.data
            };

        default:
            return state;
    }

}
