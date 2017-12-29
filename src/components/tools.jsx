import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';


export const NoData = () => {
    return (
        <div>
            <p>Sorry, no items to display</p>
        </div>
    );
};

class Loading extends Component {

    render() {
        const style = {
            display: this.props.loading ? 'block' : 'none'
        };
        const className = classNames('loading', {full: this.props.full}, this.props.size, this.props.className);
        const spinner = this.props.spinner ?
            <div style={style} className="spinner-container">
                <div className="spinner"/>
            </div>
            : null;
        const content = !this.props.showError || this.props.loading || (!this.props.loading && !this.props.error) ?
            this.props.children : <p>Loading error</p>;
        return (
            <div className={className}>
                {content}
                {this.props.mask ? <div style={style} className="mask"/> : null}
                {spinner}
            </div>
        );
    }
}

Loading.defaultProps = {
    loading: false,
    showError: true,
    mask: true,
    spinner: true,
    full: false
};

Loading.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    mask: PropTypes.bool,
    full: PropTypes.bool,
    spinner: PropTypes.bool,
    size: PropTypes.string
};

export { Loading };
