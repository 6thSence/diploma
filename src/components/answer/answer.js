import React, { Component } from 'react';

import styles from './answer.css';

export default class Answer extends Component {

    render() {
        const { answer,
            idAnswer,
            idQuestion,
            checkAnswer
        } = this.props;
        return (
            <li className={ styles.answer } onClick={() => checkAnswer(idQuestion, idAnswer)}>
                { answer }
            </li>
        )
    }
};
