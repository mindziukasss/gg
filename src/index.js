import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import Cookie from "./Componnets/UI/Cookie";


const App = (props) => {
    return (
        <BrowserRouter>
            <Cookie/>
            <Routes {...props}/>
        </BrowserRouter>
    )
}

    ReactDOM.render(<App/>, document.getElementById('root'));