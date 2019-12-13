import axios from 'axios';
import {getSmurfs} from './GetSmurfs';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const postSmurf = smurf => dispatch => {
    dispatch({type: POST_SMURF_START});
    axios.post('http://localhost:3333/smurfs',smurf)
        .then(re => {
            console.log('post re', re)
            dispatch({type:POST_SMURF_SUCCESS,payload:re})
            getSmurfs()
        })
        .catch(er => {
            dispatch({type:POST_SMURF_FAILURE,payload:er.message})
        })
};