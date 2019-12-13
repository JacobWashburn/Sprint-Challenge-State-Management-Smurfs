import axios from 'axios';
import {getSmurfs} from './GetSmurfs';

export const PUT_SMURF_START = 'PUT_SMURF_START';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';
export const PUT_SMURF_FAILURE = 'PUT_SMURF_FAILURE';
export const RESET_EDITING = 'RESET_EDITING';

export const putSmurfsStart = (id) => dispatch => {
    dispatch({type: PUT_SMURF_START, payload: id});
};

export const resetEditing = () => dispatch => {
    dispatch({type: RESET_EDITING});
};

export const putSmurfs = smurf => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(re => {
            console.log({re});
            dispatch({type: PUT_SMURF_SUCCESS, payload: re});
            getSmurfs();
        })
        .catch(er => {
            console.log({er});
            dispatch({type: PUT_SMURF_FAILURE, payload: er.message});
        });
};