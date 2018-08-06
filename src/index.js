import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import App from './components/App/app';
import 'normalize.css'

ReactDom.render(
    <App/>,
    document.getElementById('app')
);