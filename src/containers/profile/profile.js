import React from 'react';
import { connect } from 'react-redux'

import styles from './profile.css';

const Profile = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.profile}>
                it's profile
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
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

