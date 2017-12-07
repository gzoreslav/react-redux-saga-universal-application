import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Info from '../components/info.jsx';


class App extends Component {
    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <div>
                <Info value={state.counter} />
            </div>
        );
    }
}
App.contextTypes = {
    store: PropTypes.object
};

export default App;