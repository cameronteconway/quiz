import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Navigation from './Navigation';
import Home from '../pages/Home';
import WorldCapitals from '../pages/WorldCapitals';
import About from '../pages/About';
import Geography from '../pages/Geography';
import NotFound from './NotFound';

import '../styles/global.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='world-capitals' element={<WorldCapitals />} />
                    <Route path='geography' element={<Geography />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
