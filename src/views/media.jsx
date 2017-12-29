import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {searchMediaAction, selectImageAction} from '../actions/mediaActions';
import {NoData, Loading} from '../components/tools.jsx';
import {Row, Col, Thumbnail, Form, FormGroup, Button} from 'react-bootstrap';


const Details = ({image}) => (
    <div>
        <p>{image.title}</p>
        <br/>
    </div>
);

const GetDetails = ({image, history}) => {
    const url = `/media/${image.id}`;
    return (
        <div>
            <Link to={url}>
                Get details
            </Link>
        </div>
    );
};

const FlickrImage = (props) => {
    const { image, fiStyle, showDetails, quickPreview, getDetails, dispatch } = props;
    const handleImagePreview = () => {
        dispatch(selectImageAction(image));
    };
    return (
        <Thumbnail
            key={image.id}
            src={image.mediaUrl}
            className={`img-${fiStyle}`}
            onClick={quickPreview ? handleImagePreview : null}
        >
            {showDetails ? <Details {...props}/> : null}
            {getDetails ? <GetDetails {...props}/> : null}
        </Thumbnail>
    );
};

class ImagesList extends Component {
    render() {
        const { images } = this.props;
        if (!images) {
            return <NoData/>;
        }
        return (
            <div className="content-wrapper">
                {images.map(image => (
                    <FlickrImage
                        {...this.props}
                        image={image}
                        fiStyle="preview"
                        quickPreview
                        getDetails
                    />
                ))}
            </div>
        );
    }
}

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

    render() {
        const {data, selected, isProcessing} = this.props.images;
        return (
            <Row>
                <Col xs={8}>
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <input className="form-control" type="text" placeholder="Search"
                                   ref={ref => (this.query = ref)}/>
                        </FormGroup>
                        {' '}
                        <Button type="submit" onClick={this.handleSearch}>
                            Search
                        </Button>
                    </Form>
                    <h4>Search results</h4>
                    <Loading loading={isProcessing} mask={true}>
                        <ImagesList images={data} dispatch={this.props.dispatch}/>
                    </Loading>
                </Col>
                <Col xs={4}>
                    <h3>Quick image preview</h3>
                    {selected ?
                        <FlickrImage
                            {...this.props}
                            image={selected}
                            fiStyle="large"
                            showDetails
                            getDetails
                        /> : <p>Please select image</p>}
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
