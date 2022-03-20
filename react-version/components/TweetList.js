import React from 'react';
import Tweet from './Tweets';

function TweetList () {
  return (
    <section className="tweets">
      <Tweet/>
      <Tweet/>
    </section>
  );
}

export default TweetList;