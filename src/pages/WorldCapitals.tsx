import { RootStateOrAny, useSelector } from 'react-redux';

import Intro from '../components/Intro';
import Questions from '../components/worldCapitals/Questions';
import QuizSetup from '../components/worldCapitals/QuizSetup';
import FinalScreen from '../components/worldCapitals/FinalScreen';

const WorldCapitals = () => {
    const { questions, questionIndex } = useSelector(
        (state: RootStateOrAny) => state.worldCapitalQuestionsData
    );

    let component;

    if (questions.length && questionIndex + 1 <= questions.length) {
        component = <Questions />;
    } else if (!questions.length) {
        component = (
            <>
                <Intro
                    title={'World Capitals Quiz'}
                    details={'How well do you know the capitals of the world?'}
                />
                <QuizSetup />
            </>
        );
    } else {
        component = <FinalScreen />;
    }

    return (
        <div className='quiz-container'>
            <div>{component}</div>
        </div>
    );
};

export default WorldCapitals;
