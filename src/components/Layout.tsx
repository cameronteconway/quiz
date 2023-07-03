import styles from '../styles/Layout.module.css';

interface Props {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
