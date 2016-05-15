import React, { Component } from 'react';

import styles from './profile.css';

const Profile = React.createClass ({
    getInitialState() {
        return {
            userName: ''
        }
    },

    componentDidMount() {
        const user = this.props.params.user;
        this.setState({
            userName: user
        });
    },

    render() {
        return (
            <div className={styles.profile}>
                it's profile for {this.state.userName}
            </div>
        )
    }
});

export default Profile;