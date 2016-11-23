import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './navigation.css';

export default () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.linkPerson} to="/profile">
                <span className={styles.linkText}>Персона</span>
            </Link>
            <Link className={styles.linkStart} to="/challenges">
                <span className={styles.linkText}>Стартуем</span>
            </Link>
            <Link className={styles.linkResults} to="/results">
                <span className={styles.linkText}>Достижения</span>
            </Link>
            <Link className={styles.linkShare} to="/share">
                <span className={styles.linkText}>Рассказать</span>
            </Link>
        </nav>
)
};
