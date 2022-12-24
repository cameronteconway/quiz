import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setScore } from '../../actions/capitalActions';
import { setIndex } from '../../actions/capitalActions';

import LoadingWheel from '../LoadingWheel';

// Helper
import { getRandomInt } from '../../util/helper';

import styles from '../../styles/Questions.module.css';

const Questions = () => {
    const [answerSelected, setAnswerSelected] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [options, setOptions] = useState([]);

    const { questionIndex, score } = useSelector(
        (state) => state.worldCapitalQuestionsData
    );
    const questions = useSelector(
        (state) => state.worldCapitalQuestionsData.questions
    );
    const loading = useSelector(
        (state) => state.worldCapitalQuestionsData.loading
    );

    const dispatch = useDispatch();

    // Current question will be updated when index changes
    const question = questions[questionIndex];
    const answer = question && question.correct_answer;

    // Put all answers into an array called 'answers', put the wrong answer in random position within array
    useEffect(() => {
        if (!question) {
            return;
        }
        let answers = [...question.incorrect_answers];
        answers.splice(
            getRandomInt(question.incorrect_answers.length),
            0,
            question.correct_answer
        );

        setOptions(answers);
    }, [question]);

    const handleListItemClick = (event) => {
        setAnswerSelected(true);
        setSelectedAnswer(event.target.innerText);

        if (event.target.textContent === answer) {
            dispatch(setScore(score + 1));
        }

        // Update the index to the next question
        if (questionIndex + 1 <= questions.length) {
            setTimeout(() => {
                setAnswerSelected(false);
                setSelectedAnswer(null);
                dispatch(setIndex(questionIndex + 1));
            }, 1500);
        }
    };

    const getClass = (option) => {
        if (!answerSelected) {
            return ``;
        }

        if (option === answer) {
            return `correct`;
        }

        if (option === selectedAnswer) {
            return `selected`;
        }
    };

    return (
        <>
            {loading ? (
                <LoadingWheel />
            ) : (
                <>
                    <div>
                        <h2 className={styles.question}>{question.question}</h2>
                        <div className={styles.questionButtons}>
                            {options.map((option, i) => (
                                <button
                                    key={i}
                                    onClick={handleListItemClick}
                                    className={getClass(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <span className={styles.score}>
                            Score: {score}/{questions.length}
                        </span>
                    </div>
                </>
            )}
        </>
    );
};

export default Questions;
