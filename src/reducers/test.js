import { ANSWER } from '../constants/challenges';

const initialState = {
    userAnswers: [],
    questions: [
        {
            idQuestion: 1,
            question: '3 + 4 = ?',
            answers: {
                '1': 7,
                '2': 5,
                '3': 4,
                '4': 9
            },
            idAnswer: 1
        },
        {
            idQuestion: 2,
            question: '8 - 5 = ?',
            answers: {
                '1': 7,
                '2': 5,
                '3': 3,
                '4': 9
            },
            idAnswer: 3
        }
    ]
};

export default function questions(state = initialState, action) {
    switch (action.type) {
        case ANSWER:
            const question = action.questionsDB.filter(item => item.idQuestion === action.idQuestion);
            const newAnswers = state.userAnswers;
            question[0].idAnswer === action.idAnswer
                ? newAnswers.push({
                    answer: true
                })
                : newAnswers.push({
                    answer: false,
                    question: question[0].question,
                    userAnswer: question[0].answers[action.idAnswer],
                    trueAnswer: question[0].answers[question[0].idAnswer]
                });
            const newQuestions = state.questions.filter(item => item.idQuestion != action.idQuestion);
            return {
                ...state,
                userAnswers: newAnswers,
                questions: newQuestions
            };
        default:
            return state;
    }

}