import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';

const Main = React.createClass ({
    start() {
        this.setState({
            start: 'true'
        });
        setTimeout('alert("go away!")', 1500);
    },

    getInitialState(){
        return {
            start: false
        }
    },

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.circle}></div>
                <div className={this.state.start ? styles.started : styles.rocket}></div>
                <a href="#" className={styles.button} onClick={this.start}>Поехали</a>
            </div>
            )
    }
});

export default Main;