import React, { Component } from 'react';

import styles from './share.css';

export default class Share extends Component {

    render() {
        return (
            <div className={styles.share}>
                <h1 className={styles.title}>Рассказать друзьям</h1>
                <div className={styles.socials}>
                    <a className={styles.socialFb}></a>
                    <a className={styles.socialVk}></a>
                    <a className={styles.socialIn}></a>
                </div>
            </div>
        )
    }
};
