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
        <h2>Home</h2>
        <div className='user-tweet'>
                <img src={logo} alt='user-image' width='50px'/>
                <input type="text" placeholder="What's hapenning?" />
        </div>
        <Messages tweets={tweets}
        users={users}/>
    </div>
  )
}
