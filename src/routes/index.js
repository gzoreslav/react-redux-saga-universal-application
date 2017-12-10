import Info from '../components/info.jsx';
import Home from '../components/home.jsx';
import { fetchCounter } from '../api/counter';


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
        path: '/info',
        component: Info,
        loadData: () => fetchCounter()
    }
];
