import React from 'react';

import styles from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.errorContainer}>
            <span className={styles.errorMessage}>404 - Page Not Found</span>
        </div>
    );
};

export default NotFound;
