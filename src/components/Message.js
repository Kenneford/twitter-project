import React from 'react'
import './Message.css'

export default function Message({tweet, users}) {

  if(!users){
    users={picture:"", username:""}
  }
  return (
    <div className='messages-cont'>
      <div className='msg-content'>
        <img src={users[5].picture} alt='' width='50px'  height="50px"/>
        {/* <p>{message.author_id}</p> */}
        <p>{users[5].username}</p>
        <p>{tweet.date}</p>
      </div>
        <p className='tweet'>{tweet.text}</p>
        <div className='reactions'>
          <p><i className="fa-regular fa-comment-dots"></i></p>
          <p><i className="fa-regular fa-retweet"></i></p>
          <p><i className="fa-regular fa-heart"></i></p>
          <p><i className="fa-regular fa-share"></i></p>
        </div>
    </div>
  )
}
