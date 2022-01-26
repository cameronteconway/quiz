import { combineReducers } from 'redux';
import geographyQuestionsReducer from './geographyQuestionsReducer';
import worldCapitalQuestionsReducer from './worldCapitalQuestionsReducer';

export default combineReducers({
    geographyQuestionsData: geographyQuestionsReducer,
    worldCapitalQuestionsData: worldCapitalQuestionsReducer,
});
