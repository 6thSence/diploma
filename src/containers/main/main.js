import React from 'react';
import { browserHistory } from 'react-router';
import styles from './main.css';

const Main = React.createClass ({
    start() {
        this.setState({
            start: 'true'
        });
        setTimeout(() => browserHistory.push('/auth'), 2200);
    },

    getInitialState(){
        return {
            start: false
        }
    },

    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.title}>Здесь возможно какой-то будет заголовок</h1>
                <h2 className={styles.subTitle}>Здесь еще можно написать какой-то подзаголовок</h2>
                <a href="#" className={styles.button} onClick={this.start}>Поехали!</a>
                <div className={this.state.start ? styles.started : styles.rocket}></div>
            </div>
            )
    }
});

export default Main;