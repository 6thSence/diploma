import React, { Component } from 'react';

import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import styles from './challenges.css';

const Challenges = React.createClass({
    getInitialState() {
        return {
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
        }
    },

    checkAnswer(id, answerId) {
        const question = this.state.testBase.filter(item => item.id === id);
        question[0].trueAnswerId === answerId ? console.log('Верно!') : console.log('Не верно!');
    },

    render() {
        return (
            <div className={styles.challenges}>
                it's challenges
                <h2>This is your first test. Good luck!</h2>
                { this.state.testBase.map(item => <Question
                    question={item}
                    key={item.id}
                    checkAnswer={this.checkAnswer}/>
                )}
            </div>
        )
    }
});

export default Challenges;