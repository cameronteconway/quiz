import styles from '../styles/Intro.module.css';

interface Props {
    title: string;
    details: string;
}

const Intro = ({ title, details }: Props) => {
    return (
        <section className={styles.intro}>
            <h1>{title}</h1>
            <span>{details}</span>
        </section>
    );
};

export default Intro;
