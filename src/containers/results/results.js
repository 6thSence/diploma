import React from 'react';
import { connect } from 'react-redux'

import styles from './results.css';

const Results = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.auth}>
                it's results
                <p>Name: {user.name}</p>
                { user.points ? `Всего баллов: ${user.points}` : 'У вас нет достижений' }
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

