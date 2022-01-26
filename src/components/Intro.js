import React from 'react';

import styles from '../styles/Intro.module.css';

const Intro = ({ title, details }) => {
    return (
        <section className={styles.intro}>
            <h1>{title}</h1>
            <span>{details}</span>
        </section>
    );
};

export default Intro;
