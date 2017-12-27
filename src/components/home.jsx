import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>React Redux-Saga universal application</h1>
                <p>This boilerplate example allows you to create React universal application:</p>
                <ul>
                    <li>server-side rendering for the first lunch with API data fetching (and if JS is disabled)</li>
                    <li>SPA in other cases</li>
                </ul>
            </div>
        );
    }
}

export default Home;
