import React from 'react';
import { connect } from 'react-redux'

import styles from './results.css';

const Results = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.auth}>
                it's results
                { user.points ? <p>Всего баллов: {user.points}</p> : <p>У вас нет достижений</p> }
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

