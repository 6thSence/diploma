import React from 'react';
import { browserHistory } from 'react-router';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux'

import BlueButton from '../../components/blueButton/blueButton';
import styles from './auth.css';
import { auth } from '../../actions/user';

const Auth = React.createClass({

    auth () {
        const userEmail = this.refs.userEmail.value;
        const userPassword = this.refs.userPassword.value;
        fetch('/users')
            .then((response) => response.status === 200 ? response.json() : error)
            .then(json => this.props.dispatch(auth(json, userEmail, userPassword)));
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

    shouldComponentUpdate(nextProps) {
        if (nextProps.user.authAnswer) {
            this._notificationSystem.addNotification({
                message: 'Авторизация прошла успешно!',
                level: 'success'
            });
            setTimeout(() => browserHistory.push('/home'), 1200);
        } else  {
            this._notificationSystem.addNotification({
                message: `Авторизация не пройдена, попробуйте снова!`,
                level: 'error'
            });
        }
        return nextProps.user.authAnswer ? true : false;

    },

    render() {
        return (
            <div className={styles.inner}>
                <NotificationSystem ref="notificationSystem" />
                <div>
                    <input ref="userEmail"
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        tabindex="0"
                        autoFocus/>
                    <input ref="userPassword"
                        className={styles.inputPassword}
                        type="password"
                        placeholder="Пароль"
                        tabindex="1"/>
                    <BlueButton onClick={this.auth} text="Войти" tabindex="2"/>
                </div>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Auth);

