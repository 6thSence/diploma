import React from 'react';
import { connect } from 'react-redux'

import styles from './profile.css';

const Profile = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.profile}>
                <h1 className={styles.title}>Ваш профиль</h1>
                <p className={styles.text}>
                    Имя:
                    <span className={styles.subText}> {user.name}</span>
                </p>
                <p className={styles.text}>
                    Email:
                    <span className={styles.subText}> {user.email}</span>
                </p>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Profile);

