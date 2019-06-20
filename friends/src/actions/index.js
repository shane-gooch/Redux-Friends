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
    console.log('hella')
    dispatch({ type: FETCH_START});
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
}