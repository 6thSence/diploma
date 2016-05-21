import React from 'react';
import { browserHistory } from 'react-router';
import styles from './main.css';

const Main = React.createClass ({
    start() {
        this.setState({
            start: 'true'
        });
        setTimeout(() => browserHistory.push('/auth'), 1500);
    },

    componentWillReceiveProps() {
        //TODO: get users
        //if (!this.props.finishedTest && this.props.userAnswers.length > 0) {
        //    switch (tail(this.props.userAnswers).answer) {
        //        case true:
        //            this._notificationSystem.addNotification({
        //                message: 'Верно!',
        //                level: 'success'
        //            });
        //            break;
        //        case false:
        //            this._notificationSystem.addNotification({
        //                message: `Не верно! Правильный ответ: ${tail(this.props.userAnswers).trueAnswer}`,
        //                level: 'error'
        //            });
        //            break;
        //        default:
        //            break;
        //    }
        //}
    },

    getInitialState(){
        return {
            start: false
        }
    },

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.circle}></div>
                <div className={this.state.start ? styles.started : styles.rocket}></div>
                <a href="#" className={styles.button} onClick={this.start}>Поехали  </a>
            </div>
            )
    }
});

export default Main;