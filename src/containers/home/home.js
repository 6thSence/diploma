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
                        <Link className={styles["nav-link"]} to="/profile">Персона</Link>
                        <Link className={styles["nav-link"]} to="/challenges">Стартуем</Link>
                        <Link className={styles["nav-link"]} to="/results">Достижения</Link>
                        <Link className={styles["nav-link"]} to="/share">Рассказать</Link>
                    </nav>
                    <div className={styles.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};
