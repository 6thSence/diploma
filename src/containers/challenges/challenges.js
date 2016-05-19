import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux'

import { tail } from '../../utils/helpers';

import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import ResultTest from '../../components/resultTest/resultTest'
import styles from './challenges.css';
import { questions } from './selectors';
import { answer } from '../../actions/pageActions';

const Challenges = React.createClass({

    checkAnswer(idQuestion, idAnswer) {
        this.props.dispatch(answer(idQuestion, idAnswer, this.props.questionsDB));
    },

    checkResult() {
        let countTrue = 0;
        let countFalse = 0;
        this.props.userAnswers.forEach(item => {
            item.answer === false ? countFalse++ : countTrue++;
        });

        return <ResultTest countTrue={countTrue} countFalse={countFalse} points={countTrue} userAnswers={this.props.userAnswers} />;
    },

    _addNotification(event) {
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    },

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    },

    componentWillReceiveProps() {
        if (this.props.userAnswers.length != 0 && tail(this.props.userAnswers).answer) {
            this._notificationSystem.addNotification({
                message: 'Верно!',
                level: 'success'
            })
        } else if (this.props.userAnswers.length != 0) {
            this._notificationSystem.addNotification({
                message: `Не верно! Правильный ответ: ${tail(this.props.userAnswers).trueAnswer}`,
                level: 'error'
            });
        }
    },

    render() {
        const { questions } = this.props;
        return (
            <div className={styles.challenges}>
                <NotificationSystem ref="notificationSystem" />


                <h2>This is your first test. Good luck!</h2>
                { questions.map(question =>
                    <Question
                        question={question}
                        key={question.idQuestion}
                        checkAnswer={this.checkAnswer}/>
                )}
                { questions.length == 0 ? this.checkResult() : null }
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questionsDB: state.test.questions,
        questions: questions(state),
        userAnswers: state.test.userAnswers
    };
};

export default connect(mapStateToProps)(Challenges)

