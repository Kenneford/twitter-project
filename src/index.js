import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './index.css';
import App from './App';
import LeftPane from './components/LeftPane';
import MainPane from './components/MainPane';
import RightPane from './components/RightPane';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='mini-twitter.com' element={<App />}>
        </Route>
        <Route path='*' element={
            <div className='empty-page'>
                <h1>Ooops! There is nothing in here...😒</h1>
                <Link to="mini-twitter.com" ><button className='empty-page-btn'>Go back</button></Link>
            </div>
        } />
    </Routes>
  </BrowserRouter>
);