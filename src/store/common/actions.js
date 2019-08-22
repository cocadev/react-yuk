import * as types from './actionTypes';

export function setData(i) {

    return dispatch => {
        dispatch({
            type: types.SET_DATA,
            data:i
        });
    }
}
