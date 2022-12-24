import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Actions
import { changeLoading } from '../../actions/geographyActions';
import { setQuestions } from '../../actions/geographyActions';
import { setIndex } from '../../actions/geographyActions';
import { setScore } from '../../actions/geographyActions';

const StartGame = ({ text }) => {
    const questionDifficulty = useSelector(
        state => state.geographyQuestionsData.options.question_difficulty
    );
    const questionAmount = useSelector(
        state => state.geographyQuestionsData.options.amount_of_questions
    );
    const questionIndex = useSelector(
        state => state.geographyQuestionsData.questionIndex
    );

    const dispatch = useDispatch();

    const handleQuery = async () => {
        const data = await axios.get(
            `https://opentdb.com/api.php?amount=${questionAmount}&category=22&difficulty=${questionDifficulty}`
        );
        dispatch(setQuestions(data.data.results));
        dispatch(changeLoading(false));

        // When the game starts set the index and score to 0
        if (questionIndex > 0) {
            dispatch(setIndex(0));
            dispatch(setScore(0));
        }
    };

    return <button onClick={handleQuery}>{text}</button>;
};

export default StartGame;
