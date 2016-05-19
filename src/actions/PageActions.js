import { ANSWER, REMOVE_USER_ANSWERS } from '../constants/challenges';

export function answer(idQuestion, idAnswer, questionsDB) {
    return {
        type: ANSWER,
        idQuestion: idQuestion,
        idAnswer: idAnswer,
        questionsDB: questionsDB
    }

}

export function removeUserAnswers() {
    return { type: REMOVE_USER_ANSWERS }
}

