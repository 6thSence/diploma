import { ANSWER, GET_QUESTIONS } from '../constants/challenges';

export function answer(idQuestion, idAnswer, questionsDB) {
    return {
        type: ANSWER,
        idQuestion: idQuestion,
        idAnswer: idAnswer,
        questionsDB: questionsDB
    }
}

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions: questions
    }
}
