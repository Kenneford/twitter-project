import React from 'react'
import './MainPane.css'
import { Link } from "react-router-dom";
import Tweets from './Tweets';

export default function MainPane({tweets, users}) {

  if (!tweets) {
    return <h2>Loading main...</h2>
  }

  return (
    <div className='mainPane'>
        <h3 className='h3'>
        <Link to="/">Home</Link>
        <i className="fa-brands fa-galactic-senate" title='Top Tweets'></i>
        </h3>
        <div className='user-tweet'>
            <img src={users[3].picture} alt='user-profile' width='50px'/>
            <input type="text" placeholder="What's hapenning?" id='tweet-input'/>
            <div className='icons-button'>
                <div className='tweet-icons'>
                    <i className="fa-regular fa-image" title='Media'></i>
                    <i className="fa-solid fa-g" title='GIF'></i>
                    <i className="fa-solid fa-align-left" title='Poll'></i>
                    <i className="fa-regular fa-face-smile" title='Emoji'></i>
                    <i className="fa-regular fa-clock" title='Schedule'></i>
                    <i className="fa-brands fa-sourcetree" title='Location'></i>
                </div>
                <button>Tweet</button>
            </div>
        </div>
        {tweets.map((tweet, index)=>{
            return(
                <div key={index} className="mainPane-tweet">
                    <Tweets users={users} tweet={tweet} />
                </div>
            )
        })}
    </div>
  )
}
