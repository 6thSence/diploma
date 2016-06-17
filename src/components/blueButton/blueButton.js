import React, { Component } from 'react';

import styles from './blueButton.css';

export default ({ onClick, text }) => {
    return (
        <a href="#" className={styles.button} onClick={onClick}>{text}</a>
    )
};
