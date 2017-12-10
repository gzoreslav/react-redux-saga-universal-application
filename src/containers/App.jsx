import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../routes';
import { Link } from 'react-router-dom';


const Status = ({ code, children }) => (
    <Route render={({ staticContext }) => {
        if (staticContext)
            staticContext.status = code;
        return children
    }}/>
);

const NotFound = () => (
    <Status code={404}>
        <div>
            <h1>Sorry, can’t find that.</h1>
        </div>
    </Status>
);

export default () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Info</Link></li>
        </ul>
        <hr/>
        <Switch>
            {routes.map(route => (
                <Route {...route}/>
            ))}
            {/*<Route component={NotFound}/>*/}
        </Switch>
    </div>
);
