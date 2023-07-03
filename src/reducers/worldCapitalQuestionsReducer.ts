const initialState: Questions = {
    loading: true,
    amount_of_questions: '',
    questions: [],
    questionIndex: 0,
    score: 0,
};

interface Question {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
}

interface Questions {
    loading: boolean;
    amount_of_questions: string;
    questions: Question[];
    questionIndex: number;
    score: number;
}

interface ReducerAction {
    type: string;
    payload?: Questions;
}

const worldCapitalQuestionsReducer = (
    state = initialState,
    action: ReducerAction
): Questions | any => {
    switch (action.type) {
        case 'CHANGE_WORLDCAPITAL_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'CHANGE_WORLDCAPITAL_AMOUNT':
            return {
                ...state,
                amount_of_questions: action.payload,
            };
        case 'SET_WORLDCAPITAL_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            };
        case 'SET_WORLDCAPITAL_INDEX':
            return {
                ...state,
                questionIndex: action.payload,
            };
        case 'SET_WORLDCAPITAL_SCORE':
            return {
                ...state,
                score: action.payload,
            };
        case 'RESET_WORLDCAPITAL_STATE':
            return initialState;
        default:
            return state;
    }
};

export default worldCapitalQuestionsReducer;
