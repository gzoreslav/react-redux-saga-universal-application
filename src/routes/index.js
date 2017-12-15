import Media from '../components/media.jsx';
import Home from '../components/home.jsx';
import { flickrImages } from '../api/media';


export default [
    {
        path: '/',
        key: 'root',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        key: 'home',
        component: Home
    },
    {
        path: '/media',
        key: 'media',
        component: Media,
        loadData: () => flickrImages()
    }
];
