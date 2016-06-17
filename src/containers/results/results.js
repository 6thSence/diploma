import React from 'react';
import { connect } from 'react-redux'

import styles from './results.css';

const Results = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.results}>
                <h1 className={styles.title}>Ваши достижения</h1>
                { user.points ?
                    <p>Всего баллов: {user.points}</p>
                    : <p>Пока что у вас еще нет достижений. Выполните задания для получения баллов.</p> }
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

