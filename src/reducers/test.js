import { ANSWER, GET_QUESTIONS } from '../constants/challenges';
import { tail } from '../utils/helpers';

const initialState = {
    finishedTest: false,
    userAnswers: [],
    questions: []
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
            const finishedTest = newQuestions.length < 1 ? true : false;

            return {
                ...state,
                userAnswers: newAnswers,
                questions: newQuestions,
                questionsDB: action.questionsDB,
                finishedTest: finishedTest
            };
        case GET_QUESTIONS:
            const questions = action.questions.map(item => {
                const { idAnswer, ...question} = item;
                return question;
            });
            return {
                ...state,
                questions: questions
            };
        default:
            return state;
    }

}