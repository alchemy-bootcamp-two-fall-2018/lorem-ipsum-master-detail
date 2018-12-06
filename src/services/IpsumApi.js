import ipsumData from '../../data.js';

export default {
  getAll() {
    return ipsumData;
  },
  addIpsum(ipsum) {
    ipsum.title = '',
    ipsum.author = '',
    ipsum.authorURL = '',
    ipsum.body = '',
    ipsumData.push(ipsum);
    return ipsum;
  }
};