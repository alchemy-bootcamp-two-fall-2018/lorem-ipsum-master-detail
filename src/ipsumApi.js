import data from '../data.js';

const ipsums = data.getAll();

export default {
    getIpsums() {
        return ipsums;
    }
}