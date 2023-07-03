import { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

// Actions
import { setScore } from '../../actions/capitalActions';
import { setIndex } from '../../actions/capitalActions';

import LoadingWheel from '../LoadingWheel';

// Helper
import { getRandomInt } from '../../util/helper';

import styles from '../../styles/Questions.module.css';

const Questions = () => {
    const [answerSelected, setAnswerSelected] = useState<boolean>(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [options, setOptions] = useState<string[]>([]);

    const { questionIndex, score } = useSelector(
        (state: RootStateOrAny) => state.worldCapitalQuestionsData
    );
    const questions = useSelector(
        (state: RootStateOrAny) => state.worldCapitalQuestionsData.questions
    );
    const loading = useSelector(
        (state: RootStateOrAny) => state.worldCapitalQuestionsData.loading
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

    const handleListItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target: HTMLElement = e.target as HTMLElement;
        setAnswerSelected(true);
        setSelectedAnswer(target.innerText);

        if (target.textContent === answer) {
            dispatch(setScore(score + 1));
        }

        // Update the index to the next question
        if (questionIndex + 1 <= questions.length) {
            setTimeout(() => {
                setAnswerSelected(false);
                setSelectedAnswer('');
                dispatch(setIndex(questionIndex + 1));
            }, 1500);
        }
    };

    const getClass = (option: string) => {
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
