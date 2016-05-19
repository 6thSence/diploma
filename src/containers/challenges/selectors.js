export const questions = (state) =>
    state.test.questions.map(item => {
        const { idAnswer, ...question} = item;
        return question;
    });