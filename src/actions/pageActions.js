import { ANSWER } from '../constants/challenges';
export function answer(idQuestion, idAnswer, questionsDB) {
    return {
        type: ANSWER,
        idQuestion: idQuestion,
        idAnswer: idAnswer,
        questionsDB: questionsDB
    }

}
