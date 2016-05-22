import { ADD_RESULT } from '../constants/user';

export const updatePoints = store => next => action => {
    switch (action.type) {
        case ADD_RESULT:
            fetch(`userUpd/${action._id}?points=${action.points}`)
                .then((response) => response.status === 200 ? response.json() : error);
            break;
        default:
            break;
    }
    return next(action)
}