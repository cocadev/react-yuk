import * as types from './actionTypes';

export function loading(i) {

    return dispatch => {
        dispatch({
            type: types.LOADING,
            data:i
        });
    }
}
