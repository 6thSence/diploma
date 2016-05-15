import React, { Component } from 'react';

import styles from './answer.css';

export default class Answer extends Component {

    render() {
        const { answerName,
            answerId,
            questionId,
            checkAnswer
        } = this.props;
        return (
            <li className={ styles.answer } onClick={() => checkAnswer(questionId, answerId)}>
                { answerName }
            </li>
        )
    }
};
