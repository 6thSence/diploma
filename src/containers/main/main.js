import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';
import World from '../../components/world/world';

export default class Main extends Component {
    render() {
        return <h1 className={styles.red}>Hello<World/></h1>
    }
};
