import data from './data.js';

export default {
    getData() {
        return data;
    }, 
    addIpsum(ipsum) {
        // ipsum.title = '',
        // ipsum.author = '',
        // data.push(ipsum);
        return ipsum;
    }
};