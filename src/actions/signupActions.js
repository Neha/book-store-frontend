import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/users/signUp', userData).then(data => console
            .log(data))
    }
}