import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../styles/FinalScreen.module.css';

// Actions
import { setQuestions } from '../../actions/capitalActions';
import { setScore } from '../../actions/capitalActions';
import { setIndex } from '../../actions/capitalActions';

const FinalScreen = () => {
    const { questions, score } = useSelector(
        state => state.worldCapitalQuestionsData
    );

    const dispatch = useDispatch();

    const replay = () => {
        dispatch(setScore(0));
        dispatch(setIndex(0));
    };

    const settings = () => {
        dispatch(setQuestions([]));
        dispatch(setIndex(0));
        dispatch(setScore(0));
    };

    return (
        <div>
            <h2 className={styles.score}>
                Final Score: {score}/{questions.length}
            </h2>
            <div className={styles.buttons}>
                <button onClick={replay}>Replay</button>
                <button onClick={settings}>New Game</button>
            </div>
        </div>
    );
};

export default FinalScreen;
