import React, { Component } from 'react';

import Answer from '../answer/answer';
import styles from './question.css';

export default class Question extends Component {

    render() {
        const { question,
            id,
            anyAnswer,
        } = this.props.question;

        return (
            <div className={styles.question}>
                <h3>{ question }</h3>
                <ul>
                    {anyAnswer.map(answer => <Answer
                        answerName={answer.name}
                        answerId={answer.id}
                        questionId={id}
                        key={answer.id}
                        checkAnswer = {this.props.checkAnswer}/>
                    )}
                </ul>
            </div>
        )
    }
};
