import axios from 'axios';

function addQuote(data) {
  return axios.post('/api/add', {
    text: data.text,
    author: data.author
  }).then(function(resp){
    console.log(resp.data);
  });
}

module.exports = {
  addQuote(author, text) {
    return axios.post('/api/add', {
      author: author,
      text: text
    });
  },
  getRandomQuote() {
    return axios.post('/api/random');
  }
}