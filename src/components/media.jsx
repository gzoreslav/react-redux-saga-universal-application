import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMediaAction, selectImageAction } from '../actions/mediaActions';
import { Row, Col, Thumbnail, Form, FormGroup, Button } from 'react-bootstrap';


const NoData = ({images}) => {
    if (images.length) {
        return null;
    }
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
};

class Media extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(searchMediaAction());
    }

    handleSearch(event) {
        event.preventDefault();
        if (this.query !== null) {
            this.props.dispatch(searchMediaAction(this.query.value));
        }
    }

    handleSelectImage(selectedImage) {
        this.props.dispatch(selectImageAction(selectedImage));
    }

    render() {
        const { data, selected } = this.props.images;
        return (
            <Row>
                <Col xs={8}>
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <input className="form-control" type="text" placeholder="Search" ref={ref => (this.query = ref)} />
                        </FormGroup>
                        {' '}
                        <Button type="submit" onClick={this.handleSearch}>
                            Search
                        </Button>
                    </Form>
                    <h4>Search results</h4>
                    <NoData images={data}/>
                    {data.map(image => (
                        <Thumbnail key={image.id} src={image.mediaUrl} className="img-preview" onClick={this.handleSelectImage.bind(this, image)}>
                        </Thumbnail>
                    ))}
                </Col>
                <Col xs={4}>
                    <h3>Image details</h3>
                    {selected ?
                        <Thumbnail key={selected.id} src={selected.mediaUrl}>
                            <p>{selected.title}</p>
                        </Thumbnail> :
                        <p>Please select image</p>}
                </Col>
            </Row>
        );
    }
}

Media.propTypes = {
    images: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = (state) => {
    return {
        images: state.images
    };
};

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(Media);
