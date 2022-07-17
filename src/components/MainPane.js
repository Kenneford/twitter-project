import React from 'react'
import Messages from './Messages'
import './MainPane.css'
import logo from '../logo.svg'

export default function MainPane({tweets,users}) {

  if (!tweets) {
    return <h2>Loading main...</h2>
  }

  return (
    <div className='mainPane'>
        <div className='h3'>
            <h3>Home</h3>
        </div>
        <div className='user-tweet'>
                <img src={users[3].picture} alt='user-image' width='50px'/>
                <input type="text" placeholder="What's hapenning?" id='tweet-input'/>
            <div className='icons-button'>
                <div className='tweet-icons'>
                    <i className="fa-regular fa-image"></i>
                    <i className="fa-thin fa-gif"></i>
                    <i className="fa-regular fa-chart-simple-horizontal"></i>
                    <i className="fa-regular fa-face-smile"></i>
                    <i className="fa-regular fa-clock"></i>
                    <i className="fa-light fa-location-smile"></i>
                </div>
                <button>Tweet</button>
            </div>
        </div>
        <Messages tweets={tweets}
        users={users}/>
    </div>
  )
}
