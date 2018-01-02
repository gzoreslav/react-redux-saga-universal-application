import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/home">
                            React Redux-Saga Universal application
                        </Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                            <li>
                                <Link to="/not_found">404 Not found</Link>
                            </li>
                            <li>
                                <Link to="/media/fetch_error">API fetch error handling</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
