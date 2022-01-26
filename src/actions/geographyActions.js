export const changeLoading = value => {
    return {
        type: 'CHANGE_GEOGRAPHY_LOADING',
        payload: value,
    };
};

export const changeDifficulty = value => {
    return {
        type: 'CHANGE_GEOGRAPHY_DIFFICULTY',
        payload: value,
    };
};

export const changeAmount = value => {
    return {
        type: 'CHANGE_GEOGRAPHY_AMOUNT',
        payload: value,
    };
};

export const setQuestions = value => {
    return {
        type: 'SET_GEOGRAPHY_QUESTIONS',
        payload: value,
    };
};

export const setIndex = value => {
    return {
        type: 'SET_GEOGRAPHY_INDEX',
        payload: value,
    };
};

export const setScore = value => {
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
