import fetch from '../services/fetchAdapter';


export function fetchCounter() {
    return fetch('http://api.ifcityevent.com/events')
        .then(response => {
            return response.json();
        /*}).then(function(json) {
            console.log('parsed json', json);
            callback(json[0].name);*/
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
}
