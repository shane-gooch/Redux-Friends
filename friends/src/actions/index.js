import axios from 'axios';
import { axiosWithAuth } from '../ulitity/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const logIn = creds => dispatch => {
    console.log(creds)
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post('/login', creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => console.log(err.response))
};


export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAI';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
}

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const addFriends = friend => dispatch => {
  
    dispatch({ type: ADD_START })
    axiosWithAuth()
        .post('/friends', friend)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        })
}

export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const deleteFriends = id => dispatch => {
    console.log(id);
    dispatch({ type: DELETE_SUCCESS })
    axiosWithAuth()
        .delete('friends/:id', id)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_SUCCESS, payload: res.data })
        })
}