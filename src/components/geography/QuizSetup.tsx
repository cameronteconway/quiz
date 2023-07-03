import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

// Actions
import { changeDifficulty } from '../../actions/geographyActions';
import { changeAmount } from '../../actions/geographyActions';

import StartGame from './StartGame';

import styles from '../../styles/QuizSetup.module.css';

const QuizSetup = () => {
    const questionDifficulty = useSelector(
        (state: RootStateOrAny) =>
            state.geographyQuestionsData.options.question_difficulty
    );
    const questionAmount = useSelector(
        (state: RootStateOrAny) =>
            state.geographyQuestionsData.options.amount_of_questions
    );

    const dispatch = useDispatch();

    // Handle changes in setup
    const handleDifficultyChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(changeDifficulty(e.target.value));
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeAmount(e.target.value));
    };

    return (
        <div className={styles.quizSetupGeog}>
            <div>
                <label className={styles.label}>Amount of Questions</label>
                <select
                    className={styles.dropdown}
                    id='questionsAmountGeography'
                    value={questionAmount}
                    onChange={handleAmountChange}
                >
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
            </div>

            <div>
                <label className={styles.label}>Difficulty</label>
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
            </div>

            <StartGame text='Start Quiz' />
        </div>
    );
};

export default QuizSetup;
