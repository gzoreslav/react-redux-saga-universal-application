import React, { Component } from 'react';
import PropTypes from "prop-types";


class Info extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <h1>
                Info Value 10 = {state.counter}
            </h1>
        );
    }
}
Info.contextTypes = {
    store: PropTypes.object
};

export default Info;