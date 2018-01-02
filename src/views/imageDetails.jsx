import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImageDetailsAction } from '../actions/mediaActions';
import { Loading } from '../components/tools.jsx';
import { Row, Col } from 'react-bootstrap';


class ImageDetails extends Component {
    componentDidMount() {
        this.props.dispatch(getImageDetailsAction(this.props.match.params.imageid));
    }

    render() {
        const { details, isProcessing, error } = this.props.images;
        return (
            <Row>
                <Col xs={12}>
                    <Loading loading={isProcessing} mask={true} isError={!!error} error={error}>
                        <h1>{details.title}</h1>
                        <img src={details.mediaUrl}/>
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
        images: state.images
    };
};

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(ImageDetails);
