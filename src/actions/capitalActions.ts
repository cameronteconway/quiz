interface Question {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
}

export const changeLoading = (
    value: boolean
): { type: string; payload: boolean } => {
    return {
        type: 'CHANGE_WORLDCAPITAL_LOADING',
        payload: value,
    };
};

export const changeAmount = (
    value: string
): { type: string; payload: string } => {
    return {
        type: 'CHANGE_WORLDCAPITAL_AMOUNT',
        payload: value,
    };
};

export const setQuestions = (
    value: Question[]
): { type: string; payload: Question[] } => {
    return {
        type: 'SET_WORLDCAPITAL_QUESTIONS',
        payload: value,
    };
};

export const setIndex = (value: number): { type: string; payload: number } => {
    return {
        type: 'SET_WORLDCAPITAL_INDEX',
        payload: value,
    };
};

export const setScore = (value: number): { type: string; payload: number } => {
    return {
        type: 'SET_WORLDCAPITAL_SCORE',
        payload: value,
    };
};

export const resetCapital = () => {
    return {
        type: 'RESET_WORLDCAPITAL_STATE',
    };
};
