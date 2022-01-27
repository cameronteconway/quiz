import React from 'react';

import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <h1>Geography Quiz</h1>
                <span className={styles.detail}>
                    Designed an developed by{' '}
                    <a
                        title={`Go to Cameron Conway's portfolio`}
                        href='https://cameronconway.co.uk'
                        rel='noreferrer'
                        target='_blank'
                        className={styles.portfolio}
                    >
                        Cameron Conway
                    </a>{' '}
                    using React and Redux.
                </span>
            </div>
        </div>
    );
};

export default Home;
