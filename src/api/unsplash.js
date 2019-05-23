import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {

        Authorization: 'Client-ID 900bce059776a6e5801bbe247f9cb24720b58650423812d00d4c211aef27a62e'
    }
});


