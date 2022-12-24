import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeAmount } from '../../actions/capitalActions';

import StartGame from './StartGame';

import styles from '../../styles/QuizSetup.module.css';

const QuizSetup = () => {
    const questionAmount = useSelector(
        state => state.worldCapitalQuestionsData.amount_of_questions
    );

    const dispatch = useDispatch();

    // Handle changes in setup
    const handleAmountChange = event => {
        dispatch(changeAmount(event.target.value));
    };

    return (
        <div className={styles.quizSetupCapitals}>
            <div>
                <label className={styles.label}>Amount of Questions</label>
                <select
                    className={styles.dropdown}
                    id='questionsAmountCapitals'
                    value={questionAmount}
                    onChange={handleAmountChange}
                >
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
            </div>

            <StartGame text='Start Quiz' />
        </div>
    );
};

export default QuizSetup;
