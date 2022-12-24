import React from 'react';

import styles from '../styles/LoadingWheel.module.css';

const LoadingWheel = () => {
    return (
        <div className={styles.loadingWheelContainer}>
            <div className={styles.loadingWheel}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingWheel;
