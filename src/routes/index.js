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
        getPreloadedState: data => ({images: {data: data[0] || [], selected: data[0][0]}}),
        pageTitle: 'Media'
    },
    {
        path: '/media/:imageid',
        key: 'imageDetails',
        component: ImageDetails,
        loadData: (match) => imageDetail(match && match.params.imageid),
        getPreloadedState: data => ({images: {details: data[0]}}),
        pageTitle: 'Details'
    }
];
