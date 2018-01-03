import Media from '../views/media.jsx';
import Home from '../views/home.jsx';
import ImageDetails from '../views/imageDetails.jsx';
import { flickrImages, imageDetail } from '../api/media';


export default [
    {
        path: '/',
        key: 'root',
        exact: true,
        component: Home,
        pageTitle: 'Root'
    },
    {
        path: '/home',
        key: 'home',
        component: Home,
        pageTitle: 'Home'
    },
    {
        path: '/media',
        key: 'media',
        exact: true,
        component: Media,
        loadData: () => flickrImages(),
        getPreloadedState: data => {
            let metadata = data[0].metadata || {};
            return {images: {
                data: data[0].data || [],
                selected: (data[0].data && data[0].data[0]) || {},
                metadata
            }}
        },
        pageTitle: 'Media'
    },
    {
        path: '/media/:imageid',
        key: 'imageDetails',
        component: ImageDetails,
        loadData: (match) => imageDetail(match && match.params.imageid),
        getPreloadedState: data => {
            let metadata = data[0].metadata || {};
            return {details: {
                data: data[0].data || {},
                metadata
            }}
        },
        pageTitle: 'Details'
    }
];
