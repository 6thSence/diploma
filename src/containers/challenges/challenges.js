import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux'

import { tail } from '../../utils/helpers';

import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import ResultTest from '../../components/resultTest/resultTest'
import styles from './challenges.css';
import { answer, getQuestions } from '../../actions/pageActions';
import DevTools from '../DevTools/DevTools';

const Challenges = React.createClass({

    checkAnswer(idQuestion, idAnswer) {
        fetch('http://localhost:3000/db')
            .then((response) => response.status === 200 ? response.json() : error)
            .then(json => this.props.dispatch(answer(idQuestion, idAnswer, json)));
    },

    _addNotification(event) {
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    },

    componentWillMount() {
        fetch('http://localhost:3000/db')
            .then((response) => response.status === 200 ? response.json() : error)
            .then(json => this.props.dispatch(getQuestions(json)));
    },

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    },

    componentWillReceiveProps() {
        if (!this.props.finishedTest && this.props.userAnswers.length > 0) {
            switch (tail(this.props.userAnswers).answer) {
                case true:
                    this._notificationSystem.addNotification({
                        message: 'Верно!',
                        level: 'success'
                    });
                    break;
                case false:
                    this._notificationSystem.addNotification({
                        message: `Не верно! Правильный ответ: ${tail(this.props.userAnswers).trueAnswer}`,
                        level: 'error'
                    });
                    break;
                default:
                    break;
            }
        }
    },

    render() {
        const { questions, finishedTest } = this.props;

        return (
            <div className={styles.challenges}>
                <NotificationSystem ref="notificationSystem" />

                { !finishedTest
                    ? <h2>This is your first test. Good luck!</h2>
                    : <h2>Good Job!</h2> }

                { !finishedTest && questions.map(question =>
                    <Question
                        question={question}
                        key={question.idQuestion}
                        checkAnswer={this.checkAnswer}/>
                )}
                { finishedTest ? <ResultTest
                    userAnswers={this.props.userAnswers} /> : null }
                <DevTools />
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questions: state.test.questions || [],
        userAnswers: state.test.userAnswers || [],
        finishedTest: state.test.finishedTest
    };
};

export default connect(mapStateToProps)(Challenges)

