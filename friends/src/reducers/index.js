import { LOGIN_START ,LOGIN_SUCCESS, LOGIN_FAIL, FETCH_START, FETCH_SUCCESS, FETCH_FAIL,  ADD_START, ADD_SUCCESS, DELETE_SUCCESS } from '../actions';

const initialState = {
    friends: [],
    fetchingData: false,
    isLoggingIn: false,
    error: '',
    updatingFriend: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                isLoggingIn: true
            };
        case LOGIN_SUCCESS:
                return {
                    ...state,
                    error: '',
                    isLoggingIn: false
                };
        case LOGIN_FAIL:
                return {
                    ...state,
                    error: 'Not working...',
                    isLoggingIn: false
                };
        case FETCH_START:
            return {
                ...state,
                error: '',
                fetchingData: true
            };
        case FETCH_SUCCESS:
                return {
                    ...state,
                    error: '',
                    fetchingData: false,
                    friends: action.payload 
                };
        case FETCH_FAIL:
                return {
                    ...state,
                    error: 'Not working...',
                    isLoggingIn: false
                };
        case ADD_START:
            return {
                ...state,
                error: '',
            };
        case ADD_SUCCESS:
            return {
                ...state,
                error: '', 
                fetchingData: false,
                friends: action.payload
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                error: '',
                friends: action.payload
            }
            default: 
                return state; 
    }
}



export default reducer;