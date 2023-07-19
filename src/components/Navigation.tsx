import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { resetGeography } from '../actions/geographyActions';
import { resetCapital } from '../actions/capitalActions';

// Helper
import { shuffle } from '../util/helper';

import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from '../styles/Navigation.module.css';

const PrimaryNavigation = () => {
    const [click, setClick] = useState(false);
    const [shuffledColours, setShuffledColours] = useState<string[]>([]);
    const hamburgerRef: React.RefObject<HTMLButtonElement> =
        useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClick(!click);
        e.currentTarget.classList.toggle(styles['is-active']);
    };

    const closeMobileMenu = () => {
        if (click) {
            setClick(!click);
            hamburgerRef.current?.classList.toggle(styles['is-active']);
        }
    };

    const resetQuestionStates = (e: React.MouseEvent<HTMLElement>) => {
        const target: HTMLElement = e.target as HTMLElement;
        if (
            target.innerHTML === 'World Capitals' &&
            window.location.pathname === '/world-capitals'
        ) {
            dispatch(resetGeography());
        } else if (
            target.innerHTML === 'Geography' &&
            window.location.pathname === '/geography'
        ) {
            dispatch(resetCapital());
        } else {
            dispatch(resetGeography());
            dispatch(resetCapital());
        }
    };

    // Call two functions on click, to close mobile menu and to reset questions
    const navClick = (e: React.MouseEvent<HTMLElement>) => {
        closeMobileMenu();
        resetQuestionStates(e);
    };

    useEffect(() => {
        const colours = ['#437F97', '#849324', '#FFB30F', '#FD151B'];
        setShuffledColours(shuffle(colours));
    }, []);

    return (
        <header className={styles.header}>
            <Link
                to='/'
                title='Go to the homepage'
                className={styles.homeLink}
                onClick={navClick}
            >
                <span>
                    <span style={{ color: shuffledColours[0] }}>Q</span>
                    <span style={{ color: shuffledColours[1] }}>u</span>
                    <span style={{ color: shuffledColours[2] }}>i</span>
                    <span style={{ color: shuffledColours[3] }}>z</span>
                </span>
            </Link>
            <button
                className={styles.hamburger}
                ref={hamburgerRef}
                onClick={(e) => handleClick(e)}
                type='button'
                aria-label='Mobile navigation'
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
            <nav className={click ? styles.active : null}>
                <ul className={styles.navLinkList}>
                    <li>
                        <Link
                            to='/'
                            onClick={navClick}
                            title='Go to the homepage'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/world-capitals'
                            onClick={(e) => navClick(e)}
                            title='Go to world capitals quiz'
                        >
                            World Capitals
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/geography'
                            onClick={(e) => navClick(e)}
                            title='Go to geography quiz'
                        >
                            Geography
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default PrimaryNavigation;
