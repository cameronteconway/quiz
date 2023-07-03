import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App.tsx';

import geographyQuestionsReducer from './reducers/geographyQuestionsReducer.ts';
import worldCapitalQuestionsReducer from './reducers/worldCapitalQuestionsReducer.ts';

const store = configureStore({
    reducer: {
        geographyQuestionsData: geographyQuestionsReducer,
        worldCapitalQuestionsData: worldCapitalQuestionsReducer,
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
