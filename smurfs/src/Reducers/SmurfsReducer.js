import {
    GET_SMURF_START,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from '../Actions';

const intialState = {
    isFetchingMessage: 'Please wait while we locate some smurfs.',
    isFetching: false,
    error: '',
    smurfList: []
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_SMURF_START || POST_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfList: action.payload
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case GET_SMURF_FAILURE || POST_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;