import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../routes';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';


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
        <Row>
            <Col xs={12}>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/media">Media</Link>
            </Col>
        </Row>
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
