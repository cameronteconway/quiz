const initialState = {
    options: {
        loading: true,
        question_difficulty: 'easy',
        amount_of_questions: '10',
    },
    questions: [],
    questionIndex: 0,
    score: 0,
};

const geographyQuestionsReducer = (state = initialState, action) => {
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
