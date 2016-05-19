import React, { Component } from 'react';

import styles from './resultTest.css';

const ResultTest = React.createClass({

    componentWillUnmount () {
        this.props.removeTest();
    },

    render() {
    const { points,
        countTrue,
        countFalse,
        userAnswers } = this.props;
        return (
            <div className={ styles.result }>
                <h2>Тест окончен.</h2>
                <p>Баллы: {points}</p>
                <p>Правильных ответов: {countTrue}</p>
                <p>Неправильных ответов: {countFalse}</p>
                <p>Процент: {countTrue/userAnswers.length*100}%</p>
                { countFalse > 0 ? <h2>Ваши неверные ответы: </h2> : null }

                { userAnswers.map((item, i) =>
                    item.answer === false
                    ? <div key={i}>
                          <h3>Вопрос: {item.question}</h3>
                          <p>Ваш ответ: {item.userAnswer}</p>
                          <p>Правильный ответ ответ: {item.trueAnswer}</p>
                    </div>
                    : null)
                }
            </div>
        )
    }
});

export default ResultTest;