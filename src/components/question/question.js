import React, { Component } from 'react';

import Answer from '../answer/answer';
import styles from './question.css';

export default class Question extends Component {

    render() {
        const { question,
            idQuestion,
            answers,
        } = this.props.question;

        return (
            <li className={styles.question}>
                <h3>{ question }</h3>
                <ul>
                    {Object.keys(answers).map(id => <Answer
                        answer={answers[id]}
                        idAnswer={Number(id)}
                        idQuestion={idQuestion}
                        key={id}
                        checkAnswer = {this.props.checkAnswer}/>
                    )}
                </ul>
            </li>
        )
    }
};
