import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import styles from './profile.css';

const Profile = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.profile}>
                <h1 className={styles.title}>Спасибо что скачал LM – вот тебе еще TW</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ViYGWK7gC2k" frameborder="0" allowfullscreen></iframe>
                <h2 className={styles.link} onClick={() => browserHistory.push('/results')}>Купить</h2>
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

