import React, { Component } from 'react';

import Navigation from '../../components/navigation/navigation';

import styles from './home.css';

export default class Home extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};
