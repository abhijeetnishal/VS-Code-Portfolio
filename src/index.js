//importing components
import React from 'react';
import {createRoot} from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';

import App from './App';

import './index.css';

const container = document.getElementById('root')
const rootElement=createRoot(container);

rootElement.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
//connect our entire application and html with id=root