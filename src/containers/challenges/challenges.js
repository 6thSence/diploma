import React from 'react';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux';

import { tail } from '../../utils/helpers';

import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import ResultTest from '../../components/resultTest/resultTest'
import styles from './challenges.css';
import { answer, getQuestions } from '../../actions/challenges';
import { addResult } from '../../actions/user';

const Challenges = React.createClass({

    checkAnswer(idQuestion, idAnswer) {
        fetch('/db')
            .then((response) => response.status === 200 ? response.json() : error)
            .then(json => this.props.dispatch(answer(idQuestion, idAnswer, json)));
    },

    addPoints() {
        let points = 0;
        this.props.userAnswers.forEach(item => { if (item.answer) points++; });
        console.log('points = ', points);
        console.log('this.props.user.points = ', this.props.user.points);
        console.log('points * 5 = ', points * 5);
        console.log('points * 5 + this.props.user.points = ', points * 5 + Number(this.props.user.points));
        points = points * 5 + Number(this.props.user.points);
        this.props.dispatch(addResult(points, this.props.user._id));
    },

    _addNotification(event) {
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        });
    },

    componentWillMount() {
        if (!this.props.finishedTest && this.props.questions.length < 1) {
            fetch('/db')
                .then((response) => response.status === 200 ? response.json() : error)
                .then(json => this.props.dispatch(getQuestions(json)));
        }
    },

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    },

    componentWillReceiveProps(nextProps) {
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
                    userAnswers={this.props.userAnswers}
                    addPoints={this.addPoints}
                    iaAddResult={this.props.user.isAddResult}/> : null }
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questions: state.test.questions || [],
        userAnswers: state.test.userAnswers || [],
        finishedTest: state.test.finishedTest,
        user: state.user
    };
};

export default connect(mapStateToProps)(Challenges)

