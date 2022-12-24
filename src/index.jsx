import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';

import geographyQuestionsReducer from './reducers/geographyQuestionsReducer';
import worldCapitalQuestionsReducer from './reducers/worldCapitalQuestionsReducer';

const store = configureStore({
    reducer: {
        geographyQuestionsData: geographyQuestionsReducer,
        worldCapitalQuestionsData: worldCapitalQuestionsReducer,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
