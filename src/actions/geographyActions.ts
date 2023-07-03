interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export const changeLoading = (
    value: boolean
): { type: string; payload: boolean } => {
    return {
        type: 'CHANGE_GEOGRAPHY_LOADING',
        payload: value,
    };
};

export const changeDifficulty = (
    value: string
): { type: string; payload: string } => {
    return {
        type: 'CHANGE_GEOGRAPHY_DIFFICULTY',
        payload: value,
    };
};

export const changeAmount = (
    value: string
): { type: string; payload: string } => {
    return {
        type: 'CHANGE_GEOGRAPHY_AMOUNT',
        payload: value,
    };
};

export const setQuestions = (
    value: Question[]
): { type: string; payload: Question[] } => {
    return {
        type: 'SET_GEOGRAPHY_QUESTIONS',
        payload: value,
    };
};

export const setIndex = (value: number): { type: string; payload: number } => {
    return {
        type: 'SET_GEOGRAPHY_INDEX',
        payload: value,
    };
};

export const setScore = (value: number): { type: string; payload: number } => {
    return {
        type: 'SET_GEOGRAPHY_SCORE',
        payload: value,
    };
};

export const resetGeography = () => {
    return {
        type: 'RESET_GEOGRAPHY_STATE',
    };
};
