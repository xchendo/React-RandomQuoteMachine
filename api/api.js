import axios from 'axios';

function addQuote(text, author) {
  return axios.post('/api/add', {
    text,
    author
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
  },
  getSpecificQuote() {
    return axios.post('/api/2').then((resp) => {
      console.log(resp.data);
    });
  },
  getAllQuotes() {
    return axios.post('api/all/page/2');
  }
}