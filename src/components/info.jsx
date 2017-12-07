import React, { Component } from 'react';


class Info extends Component {
    render() {
        return (
            <h1>
                Info Value 10 = {this.props.value}
            </h1>
        );
    }
}

export default Info;