import React from 'react';
import { connect } from 'react-redux'

import styles from './results.css';

const Results = React.createClass({

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div className={styles.auth}>
                it's results
                <p>Name: {user.name}</p>
                { user.results ? 'У вас есть достижения' : 'У вас нет достижений' }
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Results);

