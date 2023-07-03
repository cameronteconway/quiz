import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import WorldCapitals from './pages/WorldCapitals';
import Geography from './pages/Geography';
import NotFound from './components/NotFound';

import './styles/global.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='world-capitals' element={<WorldCapitals />} />
                    <Route path='geography' element={<Geography />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
