export const questions = (state) =>
    state.questions.testBase.map(item => {
        const { trueAnswerId, ...question} = item;
        return question;
    });