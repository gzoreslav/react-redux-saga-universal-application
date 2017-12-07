import React from 'react'
import { Router, Route, Switch } from 'react-router'

import App from '../views/app.jsx';
import Info from '../views/info.jsx';
import Questions from '../views/questions.jsx';


export default function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="questions" component={Questions} />
                <IndexRoute component={Info} />
            </Route>
        </Router>
    )
}