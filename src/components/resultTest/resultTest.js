import React, { Component } from 'react';

import styles from './resultTest.css';

const ResultTest = React.createClass({
    componentWillMount () {
        if (!this.props.iaAddResult) {
            this.props.addPoints();
        }
    },

    render() {
        const { userAnswers } = this.props;
        let countTrue = 0;
        userAnswers.forEach(item => item.answer && countTrue++);

        return (
            <div>
                <h1 className={styles.title}>Ваш результат: {countTrue}/{userAnswers.length}</h1>
                <p>Спасибо, что прошел этот тест!</p>
                <p>Меня зовут Пушкарская Дарья и я программист из компании Mail.ru</p>
                <p>Этот небольшой текст создан на React + Redux + Webpack и не только...</p>
                <p>
                Если тебе интересно все, что связано с новыми технологиями в мире веб и
                ты хочешь получать на почту полезные материалы, мои наработки, видео-уроки и такие вот тесты,
                    то жми на ссылку ниже!</p>
            </div>
        )
    }
});

export default ResultTest;