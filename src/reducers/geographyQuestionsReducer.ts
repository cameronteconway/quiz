interface Options {
    loading: boolean;
    question_difficulty: string;
    amount_of_questions: string;
}

interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

interface Questions {
    options: Options;
    questions: Question[];
    questionIndex: number;
    score: number;
}

interface ReducerAction {
    type: string;
    payload?: Questions;
}

const initialState: Questions = {
    options: {
        loading: true,
        question_difficulty: 'easy',
        amount_of_questions: '10',
    },
    questions: [],
    questionIndex: 0,
    score: 0,
};

const geographyQuestionsReducer = (
    state = initialState,
    action: ReducerAction
): Questions | any => {
    switch (action.type) {
        case 'CHANGE_GEOGRAPHY_LOADING':
            return {
                ...state,
                options: {
                    ...state.options,
                    loading: action.payload,
                },
            };
        case 'CHANGE_GEOGRAPHY_DIFFICULTY':
            return {
                ...state,
                options: {
                    ...state.options,
                    question_difficulty: action.payload,
                },
            };
        case 'CHANGE_GEOGRAPHY_AMOUNT':
            return {
                ...state,
                options: {
                    ...state.options,
                    amount_of_questions: action.payload,
                },
            };
        case 'SET_GEOGRAPHY_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            };

        case 'SET_GEOGRAPHY_INDEX':
            return {
                ...state,
                questionIndex: action.payload,
            };

        case 'SET_GEOGRAPHY_SCORE':
            return {
                ...state,
                score: action.payload,
            };
        case 'RESET_GEOGRAPHY_STATE':
            return initialState;
        default:
            return state;
    }
};

export default geographyQuestionsReducer;
