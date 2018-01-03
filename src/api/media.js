import fetch from '../services/fetchAdapter';


const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const BASE_URL = 'https://api.flickr.com/services/rest/';

export const flickrImages = (searchQuery) => {
    searchQuery = searchQuery || 'new year 2018';
    const FLICKR_API_ENDPOINT = `${BASE_URL}?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
    return fetch(FLICKR_API_ENDPOINT)
        .then(response => {
            return response.json();
        })
        .then(json => {
            const data = json.photos.photo.map(({ farm, server, id, secret, title }) => ({
                id,
                title,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            }));
            return { data };
        })
        .catch(ex => (
            {
                metadata: {
                    error: ex
                }
            }
        ));
};

export const imageDetail = (id) => {
    const FLICKR_API_ENDPOINT = `${BASE_URL}?method=flickr.photos.getInfo&photo_id=${id}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1`;
    return fetch(FLICKR_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then(json => {
            const { farm, server, id, secret, title } = json.photo;
            const data = {
                id,
                title: title._content,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            };
            return { data }
        })
        .catch(ex => (
            {
                metadata: {
                    error: ex
                }
            }
        ));
};
