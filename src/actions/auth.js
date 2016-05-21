import { AUTH } from '../constants/auth';

export function auth(users, userEmail, userPassword) {
    return {
        type: AUTH,
        users: users,
        userEmail: userEmail,
        userPassword: userPassword
    }
}
