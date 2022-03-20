import React from 'react';

function TweetForm () {
  const value = "What are you humming about?"
  
  return (
    <section className="newtweet">
      <form method=".preventDefault()" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={value}></textarea>
        <input type="submit" value="Tweet" className="form__input"/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;