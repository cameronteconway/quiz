export const changeLoading = value => {
    return {
        type: 'CHANGE_WORLDCAPITAL_LOADING',
        payload: value,
    };
};

export const changeAmount = value => {
    return {
        type: 'CHANGE_WORLDCAPITAL_AMOUNT',
        payload: value,
    };
};

export const setQuestions = value => {
    return {
        type: 'SET_WORLDCAPITAL_QUESTIONS',
        payload: value,
    };
};

export const setIndex = value => {
    return {
        type: 'SET_WORLDCAPITAL_INDEX',
        payload: value,
    };
};

export const setScore = value => {
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
