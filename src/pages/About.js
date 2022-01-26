import React from 'react';

import styles from '../styles/About.module.css';

const About = () => {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div>
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
        </>
    );
};

export default About;
