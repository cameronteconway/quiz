import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';

import { changeLoading } from '../../actions/capitalActions';
import { setQuestions } from '../../actions/capitalActions';
import { setIndex } from '../../actions/capitalActions';
import { setScore } from '../../actions/capitalActions';

// Helper
import { shuffle } from '../../util/helper';

interface Props {
    text: string;
}

interface Country {
    capital: string;
    iso2: string;
    iso3: string;
    name: string;
}

interface Question {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
}

const StartGame = ({ text }: Props) => {
    const { questionIndex, amount_of_questions } = useSelector(
        (state: RootStateOrAny) => state.worldCapitalQuestionsData
    );

    const dispatch = useDispatch();

    const handleQuery = async () => {
        const data = await axios.get(
            'https://countriesnow.space/api/v0.1/countries/capital'
        );
        const allCountries: Country[] = data.data.data;

        // Filter out all countries that don't have a capital e.g. Antartica
        const filteredCountries: Country[] = allCountries.filter(
            (obj: Country) => obj.capital !== ''
        );

        // Shuffle and then slice array depending on how many questions the user would like to answer ('amount_of_questions')
        let shuffledCountries: Country[] = [];
        if (amount_of_questions === '10') {
            shuffledCountries = shuffle(filteredCountries).slice(0, 40);
        } else {
            shuffledCountries = shuffle(filteredCountries).slice(0, 80);
        }
        const groupedCountries: Country[][] = [];
        for (let i = 0; i < shuffledCountries.length; i += 4) {
            groupedCountries.push(shuffledCountries.slice(i, i + 4));
        }

        // Create new array of object with 'correct_answer', 'incorrect_answers' ([]), and 'question'
        const formattedQuestions = [];
        for (let i = 0; i < groupedCountries.length; i++) {
            const questionObj: Question = {
                question: '',
                correct_answer: '',
                incorrect_answers: [],
            };

            questionObj.question = `What is the capital of ${groupedCountries[i][0].name}`;
            questionObj.correct_answer = groupedCountries[i][0].capital;
            questionObj.incorrect_answers = [];
            for (let j = 1; j < groupedCountries[i].length; j++) {
                questionObj.incorrect_answers.push(
                    groupedCountries[i][j].capital
                );
            }
            formattedQuestions.push(questionObj);
        }

        dispatch(setQuestions(formattedQuestions));
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
