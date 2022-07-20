import React from 'react'
import './Tweets.css'
import {Link, Route, Routes } from 'react-router-dom'
import SingleTweet from './SingleTweet'

export default function User({user, tweets}) {
  return (
    <div className='tweet-content'>
      {tweets.map((tweet, index)=>{
      return(
        <div key={index} className='tweetContent-wrap'>
          <div className='tweetUser-wrap'>
            <div className='tweetUser-info'>
              <img src={user.picture} alt='user-profile' width='50px'  height="50px"/>
              <p className='tweet-user'>{user.name.first} {user.name.last}</p>
              <p className='nickName'>@{user.username}</p> 
              <div className='div-dot'>.</div>
              <p className='tweet-date'>{tweet.date}</p>
            </div>
            <p className='more-dots'><i className="fa-solid fa-ellipsis"></i></p>
          </div>
          <div className='tweetText'><p><Link to={`/user-tweet/${tweet.author_id}`} >{tweet.text}</Link></p></div>
          <div className='reactions'>
            <p className='comment'><i className="fa-regular fa-comment-dots" title='Reply'></i> {tweet.share}</p>
            <p className='retweet'><i className="fa-solid fa-code-compare" title='Retweet'></i> {tweet.retweet}</p>
            <p className='like'><i className="fa-regular fa-heart" title='Like'></i> {tweet.likes}</p>
            <p className='share'><i className="fa-regular fa-paper-plane" title='Share'></i> {tweet.share}</p>
          </div>
        </div>
      )
  })}
  <Routes>
      <Route path='/user-tweet/:author_id' 
      element={<SingleTweet user={user} tweet={tweets} />} 
      />
  </Routes>
    </div>
  )
}
