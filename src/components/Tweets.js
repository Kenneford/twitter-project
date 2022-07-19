import React from 'react'
import './Tweets.css'
import {Link} from 'react-router-dom'

export default function User({users, tweet}) {
  return (
    <div className='tweet-content'>
      {users.map((user, user_id)=>{
      return(
        <div key={user_id} className='tweetContent-wrap'>
            <div>
                <div className='tweetUser-wrap'>
                    <div className='tweetUser-info'>
                        <img src={user.picture} alt='' width='50px'  height="50px"/>
                        <p className='tweet-user'>{user.name.first} {user.name.last}</p>
                        <p className='nickName'>@{user.username}</p> 
                        <div className='div-dot'>.</div>
                        <p className='tweet-date'>{tweet.date}</p>
                    </div>
                    <div className='more-dots'>...</div>
                </div>
            </div>
            <div className='tweetText'><p>{tweet.text}</p></div>
            <div className='reactions'>
                <p className='comment'><i className="fa-regular fa-comment-dots" title='Reply'></i> {tweet.share}</p>
                <p className='retweet'><i className="fa-solid fa-code-compare" title='Retweet'></i> {tweet.retweet}</p>
                <p className='like'><i className="fa-regular fa-heart" title='Like'></i> {tweet.likes}</p>
                <p className='share'><i className="fa-regular fa-paper-plane" title='Share'></i> {tweet.share}</p>
            </div>
        </div>
      )
  })}
    </div>
  )
}
