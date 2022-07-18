import React from 'react'
import Messages from './Messages'
import './MainPane.css'
import { Link } from "react-router-dom";
import Tweets from './Tweets'
import logo from '../logo.svg'

export default function MainPane({tweets, users}) {

  if (!tweets) {
    return <h2>Loading main...</h2>
  }

  return (
    <div className='mainPane'>
            <nav className='h3'>
                <Link to="/">Home</Link>
            </nav>
        <div className='user-tweet'>
                <img src={users[3].picture} alt='user-image' width='50px'/>
                <input type="text" placeholder="What's hapenning?" id='tweet-input'/>
            <div className='icons-button'>
                <div className='tweet-icons'>
                    <i className="fa-regular fa-image"></i>
                    <i className="fa-thin fa-gif"></i>
                    <i className="fa-regular fa-clipboard-question"></i>
                    <i className="fa-regular fa-face-smile"></i>
                    <i className="fa-regular fa-clock"></i>
                    <i className="fa-light fa-location-smile"></i>
                </div>
                <button>Tweet</button>
            </div>
        </div>
        <Messages tweets={tweets}
        users={users}/>
        <nav>
        {/* <Link to="/tweets">Tweets</Link> */}
        </nav>
    </div>
  )
}
