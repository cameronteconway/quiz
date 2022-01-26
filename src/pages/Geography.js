import React from 'react';
import { useSelector } from 'react-redux';

import Intro from '../components/Intro';
import QuizSetup from '../components/geography/QuizSetup';
import Questions from '../components/geography/Questions';
import FinalScreen from '../components/geography/FinalScreen';

const Geography = () => {
    const { questions, questionIndex } = useSelector(
        state => state.geographyQuestionsData
    );

    let component;

    if (questions.length && questionIndex + 1 <= questions.length) {
        component = <Questions />;
    } else if (!questions.length) {
        component = (
            <>
                <Intro
                    title={'Geography Quiz'}
                    details={'Test your general geographic knowledge'}
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

export default Geography;
