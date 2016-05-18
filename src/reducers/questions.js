import { ANSWER } from '../constants/challenges';

const initialState = {
    usersAnswers: [],
    testBase: [
        {
            id: 1,
            question: '3 + 4 = ?',
            anyAnswer: [{
                name: 7,
                id: 1
            }, {
                name: 5,
                id: 2
            }, {
                name: 4,
                id: 3
            }, {
                name: 9,
                id: 4
            }],
            trueAnswerId: 1
        },
        {
            id: 2,
            question: '8 - 3 = ?',
            anyAnswer: [{
                name: 7,
                id: 1
            }, {
                name: 5,
                id: 2
            }, {
                name: 4,
                id: 3
            }, {
                name: 9,
                id: 4
            }],
            trueAnswerId: 2
        }
    ]
};

export default function questions(state = initialState, action) {
    switch (action.type) {
        case ANSWER:
            console.log('idQuestions', action.idQuestion);
            console.log('idAnswer', action.idAnswer);
            console.log('questionsBD', action.questionsBD);
            return state;
        default:
            return state;
    }

}