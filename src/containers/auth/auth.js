import React from 'react';
import { browserHistory } from 'react-router';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux'

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
            <div className={styles.auth}>
                <NotificationSystem ref="notificationSystem" />
                it's auth
                <div>
                    <label>email: </label>
                    <input type="text" placeholder="Email" ref="userEmail"/>
                    <label>password: </label>
                    <input type="password" placeholder="password" ref="userPassword"/>
                    <a className={styles.button} onClick={this.auth}>Go In</a>
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

