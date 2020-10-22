import axios from 'axios';

const instance = axios.create({
    // The API(cloud function) URL
    baseURL: 'https://us-central1-clone-amazon.cloudfunctions.net/api'
//     baseURL: 'http://localhost:5001/clone-amazon/us-central1/api' // localhost : The API(cloud function) URL - local API endpoint
});

export default instance;
