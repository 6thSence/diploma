import { AUTH, ADD_RESULT } from '../constants/user';

export function auth(users, userEmail, userPassword) {
    return {
        type: AUTH,
        users: users,
        userEmail: userEmail,
        userPassword: userPassword
    }
}

export function addResult(points) {
    return {
        type: ADD_RESULT,
        points: points
    }
}
