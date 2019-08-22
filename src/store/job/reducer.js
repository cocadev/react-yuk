import * as types from "./actionTypes";

const initialState = {
    data:'',
    loading:false,
};

export default function common(state = initialState, action = {}) {
    switch (action.type) {

        case types.LOADING:
            return {
                ...state,
                type: types.LOADING,
                loading:true,
                data: action.status
            };

        default:
            return state;
    }

}
