import React, { Component } from 'react';
import { Link } from 'react-router';

import LayoutBg from '../../components/layoutBg/layoutBg';
import styles from './home.css';

export default class Home extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <LayoutBg />
                <div className={styles.inner}>
                    <nav className={styles.nav}>
                        <Link className={styles.linkPerson} to="/profile">Персона</Link>
                        <Link className={styles.linkStart} to="/challenges">Стартуем</Link>
                        <Link className={styles.linkResults} to="/results">Достижения</Link>
                        <Link className={styles.linkShare} to="/share">Рассказать</Link>
                    </nav>
                    <div className={styles.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};
