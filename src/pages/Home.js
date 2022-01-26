import React from 'react';

import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <h1>Geography Quiz</h1>
                <span className={styles.detail}>
                    Test your geographical knowledge.
                </span>
            </div>
        </div>
    );
};

export default Home;
