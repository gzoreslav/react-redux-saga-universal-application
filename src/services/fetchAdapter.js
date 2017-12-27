import 'whatwg-fetch';
import nodeFetch from 'node-fetch';

export default (typeof (window) === 'undefined') ? nodeFetch : fetch;
