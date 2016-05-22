import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './home.css';

export default class Home extends Component {

    render() {
        return (
            <div className={styles.home}>
                <nav className={styles.home__nav}>
                    <Link className={styles["home__nav-link"]} to="/profile">Персона</Link>
                    <Link className={styles["home__nav-link"]} to="/challenges">Стартуем</Link>
                    <Link className={styles["home__nav-link"]} to="/results">Достижения</Link>
                    <Link className={styles["home__nav-link"]} to="/share">Рассказать</Link>
                </nav>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
};
