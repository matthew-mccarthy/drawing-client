import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';

const routes = (
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
        </div>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
