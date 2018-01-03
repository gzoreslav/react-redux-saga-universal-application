import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImageDetailsAction } from '../actions/mediaActions';
import { Loading } from '../components/tools.jsx';
import { Row, Col } from 'react-bootstrap';


class ImageDetails extends Component {

    loadData(props, id) {
        props.dispatch(getImageDetailsAction(props.match.params.imageid));
    }

    componentDidMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.imageid !== nextProps.match.params.imageid) {
            this.loadData(nextProps);
        }
    }

    render() {
        const { data, metadata } = this.props.details;
        return (
            <Row>
                <Col xs={12}>
                    <Loading {...metadata} mask={true}>
                        <h1>{data.title}</h1>
                        <img src={data.mediaUrl}/>
                    </Loading>
                </Col>
            </Row>
        );
    }
}

ImageDetails.propTypes = {
    details: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = (state) => {
    return {
        details: state.details
    };
};

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(ImageDetails);
