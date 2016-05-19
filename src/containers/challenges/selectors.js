export const selectQuestions = (questions = []) =>
    questions.map(item => {
        const { idAnswer, ...question} = item;
        return question;
    });