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
                <form method="POST" action="https://cp.unisender.com/ru/subscribe?hash=5kuzmdi6xe175ueo3q4qr78upmcmswtxhzcyenhkusy9wcz6dwrry" name="subscribtion_form">
                    <div class="contact-form__inputs">
                        <input className={styles.input} placeholder="Как вас зовут?" tabindex="1" type="text" name="name" />
                        <input className={styles.inputPassword} placeholder="Email" tabindex="2" type="text" name="email" />
                    </div>
                    <input className={styles.button} id="submite-button" title="Подписаться" tabindex="3" type="submit" value="Отправить" />
                    <div>
                        <input type="hidden" name="charset" value="UTF-8" />
                        <input type="hidden" name="default_list_id" value="8344937" />
                        <input type="hidden" name="overwrite" value="2" />
                        <input type="hidden" name="is_v5" value="1" />
                        <input type="hidden" name="Name" value="Имя" />
                    </div>
                </form>
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

