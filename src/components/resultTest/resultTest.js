import React, { Component } from 'react';

import styles from './resultTest.css';

export default class ResultTest extends Component {

    render() {
        const { points, countTrue, countFalse, userAnswers } = this.props;
        console.log(userAnswers);
        return (
            <div className={ styles.result }>
                <h2>Тест окончен.</h2>
                <p>Баллы: {points}</p>
                <p>Правильных ответов: {countTrue}</p>
                <p>Неправильных ответов: {countFalse}</p>
                <p>Процент: {countTrue/userAnswers.length*100}%</p>
                <h2>Ваши неверные ответы: </h2>

                { userAnswers.map(item =>
                    item.answer === false
                    ? <div key={item}>
                          <h3>Вопрос: {item.question}</h3>
                          <p>Ваш ответ: {item.userAnswer}</p>
                          <p>Правильный ответ ответ: {item.trueAnswer}</p>
                    </div>
                    : null)
                }
            </div>
        )
    }
};
