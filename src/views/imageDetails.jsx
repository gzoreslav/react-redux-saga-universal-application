import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getImageDetailsAction } from '../actions/mediaActions';
import {NoData, Loading} from '../components/tools.jsx';
import {Row, Col} from 'react-bootstrap';


class ImageDetails extends Component {
    componentDidMount() {
        this.props.dispatch(getImageDetailsAction(this.props.match.params.imageid));
    }

    render() {
        const { title, mediaUrl } = this.props.details;
        return (
            <Row>
                <Col xs={12}>
                    <h1>{title}</h1>
                    <img src={mediaUrl}/>
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
        details: state.images.details || {}
    };
};

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(ImageDetails);
