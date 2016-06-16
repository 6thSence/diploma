import React from 'react';

import styles from './layoutBg.css';

export default () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.layout2}></div>
            <div className={styles.layout3}></div>
            <div className={styles.layout4}></div>
            <div className={styles.layout5}></div>

            <div className={styles.planet1}></div>
            <div className={styles.planet2}></div>
            <div className={styles.planet3}></div>
            <div className={styles.planet4}></div>
            <div className={styles.planet5}></div>
        </div>
    )
}