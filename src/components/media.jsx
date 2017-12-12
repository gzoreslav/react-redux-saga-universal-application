import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';


const NoData = ({images}) => {
    return images.length ? null : <p>Client side loading...</p>
};

class Media extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(searchMediaAction());
    }

    render() {
        const { images } = this.props;
        return (
            <div>
                <h1>Flickr images</h1>
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
