import { ANSWER } from '../constants/challenges';

export function answer(idQuestion, idAnswer, questionsBD) {
    return {
        type: ANSWER,
        idQuestion: idQuestion,
        idAnswer: idAnswer,
        questionsBD: questionsBD
    }

}

