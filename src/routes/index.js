import Media from '../components/media.jsx';
import Home from '../components/home.jsx';
import { flickrImages } from '../api/media';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/media',
        component: Media,
        loadData: () => flickrImages()
    }
];
