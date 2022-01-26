import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { changeDifficulty } from '../../actions/geographyActions';
import { changeAmount } from '../../actions/geographyActions';

import StartGame from './StartGame';

import styles from '../../styles/QuizSetup.module.css';

const QuizSetup = () => {
    const questionDifficulty = useSelector(
        state => state.geographyQuestionsData.options.question_difficulty
    );
    const questionAmount = useSelector(
        state => state.geographyQuestionsData.options.amount_of_questions
    );

    const dispatch = useDispatch();

    // Handle changes in setup
    const handleDifficultyChange = event => {
        dispatch(changeDifficulty(event.target.value));
    };

    const handleAmountChange = event => {
        dispatch(changeAmount(event.target.value));
    };

    return (
        <div className={styles.quizSetupGeog}>
            <select
                className={styles.dropdown}
                id='questionsAmountGeography'
                value={questionAmount}
                onChange={handleAmountChange}
            >
                <option value='10'>10</option>
                <option value='20'>20</option>
            </select>

            <select
                className={styles.dropdown}
                id='difficulty'
                value={questionDifficulty}
                onChange={handleDifficultyChange}
            >
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>

            <StartGame text='Start Quiz' />
        </div>
    );
};

export default QuizSetup;
