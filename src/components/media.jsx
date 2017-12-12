import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';


const NoData = ({images}) => {
    if (images.length) {
        return null;
    }
    return (
        <div>
            <p>Client side loading or no data</p>
            <span>TODO: implement metadata for processing state</span>
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

    render() {
        const { images } = this.props;
        return (
            <div>
                <h1>Flickr images</h1>
                <input
                    type="text"
                    ref={ref => (this.query = ref)}
                />
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Search Library"
                    onClick={this.handleSearch}
                />
                <h2>Search results</h2>
                <NoData images={images}/>
                {images.map(image => (
                    <div key={image.id}>
                        <h3>{image.title}</h3>
                        <img src={image.mediaUrl} alt={image.title} />
                    </div>
                ))}
            </div>
        );
    }
}

Media.propTypes = {
    images: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = (state) => {
    return {
        images: state.images
    }
};

/* connect method from react-router connects the component with redux store */
export default connect(
    mapStateToProps)(Media);
