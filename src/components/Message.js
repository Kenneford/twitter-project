import React from 'react'
import './Message.css'
import {Link} from 'react-router-dom'

export default function Message({tweet, users}) {

  if(!users){
    users={picture:"", username:""}
  }
  return (
    <div className='messages-cont'>
        <div className='msg-content'>
        <div>
            <div className='msg-flex'>
                <img src={users[0].picture} alt='' width='50px'  height="50px"/>
                {/* <p>{message.author_id}</p> */}
                <p className='tweet-user'>{users[0].name.first} {users[0].name.last}</p>
                <p className='nickName'>@{users[0].username}</p> 
                <div className='div-dot'>.</div>
                <p className='tweet-date'>{tweet.date}</p>
            </div>
        </div>
            <p className='more-dots'>...</p>
        </div>
        <Link className='tweet' to={tweet}>{tweet.text}</Link>
        <div className='reactions'>
          <p className='comment'><i className="fa-regular fa-comment-dots"></i> {tweet.share}</p>
          <p className='retweet'><i className="fa-regular fa-retweet"></i> {tweet.retweet}</p>
          <p className='like'><i className="fa-regular fa-heart"></i> {tweet.likes}</p>
          <p className='share'><i className="fa-regular fa-share"></i> {tweet.share}</p>
        </div>
    </div>
  )
}
