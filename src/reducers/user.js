import { AUTH, ADD_RESULT } from '../constants/user';
import { tail } from '../utils/helpers';

const initialState = {
    'id': 'id',
    'name': 'name',
    'email': 'email',
    'password': 'password',
    'authAnswer': false
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case AUTH:
            const users = action.users.filter(item => item.email == action.userEmail && item.password == action.userPassword);
            return users.length > 0 ? { ...tail(users), authAnswer: true } : { authAnswer: false};
        case ADD_RESULT:
            return {
                ...state,
                points: action.points,
                isAddResult: true
            };
        default:
            return state;
    }

}
