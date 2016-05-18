import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux'

import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import styles from './challenges.css';
import { questions } from './selectors';
import { answer } from '../../actions/pageActions';

const Challenges = React.createClass({

    checkAnswer(id, answerId) {
        this.props.dispatch(answer(id, answerId, this.props.questionsBD));
        const question = this.props.questionsBD.testBase.filter(item => item.id === id);
        question[0].trueAnswerId === answerId
            ? this._notificationSystem.addNotification({
                message: 'Верно!',
                level: 'success'
            })
            : this._notificationSystem.addNotification({
                message: 'Не верно!',
                level: 'error'
            });
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

    render() {
        const { questions } = this.props;
        return (
            <div className={styles.challenges}>
                <NotificationSystem ref="notificationSystem" />

                <h2>This is your first test. Good luck!</h2>
                { questions.map(item =>
                    <Question
                        question={item}
                        key={item.id}
                        ref={'id' + item.id}
                        checkAnswer={this.checkAnswer}/>
                )}
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questionsBD: state.questions,
        questions: questions(state),
        usersAnswers: state.usersAnswers
    };
};

export default connect(mapStateToProps)(Challenges)

