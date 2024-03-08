import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Editor from './pages/Editor';

import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Settings from './pages/Settings';
import RouteConstants from './routes/RouteConstants';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Home />} path='/' />
                        <Route element ={<Editor/>} path='/editor' />
                        <Route element ={<Settings/>} path='/settings/profile' />
                    </Route>
                    <Route element={<PublicRoutes />}>
                        <Route element={<Login />} path={ RouteConstants.public.Login.path } />
                    </Route>
                </Routes>
            </Router>
        </div>
   );
}

export default App;
