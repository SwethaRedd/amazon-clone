import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-amazon/us-central1/api' // The API(cloud function) URL - local API endpoint
});

export default instance;