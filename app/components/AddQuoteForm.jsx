import React from 'react';
import api from 'API';

function AddQuoteForm() {
  function handleSubmit(){
    let text = document.getElementsByName("quoteText")[0].value;
    let author = document.getElementsByName("quoteAuthor")[0].value;
    //api.getSpecificQuote();
    api.addQuote(author, text);
  }
  return (
    <div className="form">
      <form action="/api/add" method="POST">
        <textarea name="quoteText" placeholder="Quote"/>
        <input type="text" name="quoteAuthor" placeholder='Author'/>
        <button type="button" className="button button--big button--blue" onClick={handleSubmit}>Submit</button>
        
      </form>
    </div>
  );
}

module.exports = AddQuoteForm;