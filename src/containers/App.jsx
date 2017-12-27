import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../routes';
import Navbar from '../components/navbar.jsx';


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
        <Navbar/>
        <div className="container">
            <Switch>
                {routes.map(route => (
                    <Route {...route}/>
                ))}
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);
