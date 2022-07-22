import React from 'react'
import './MainPane.css'
import { Link} from "react-router-dom";
import Home from './Home';
import Header from '../Header';
import UsersData from './UsersData';
import TweetsData from './TweetsData';

export default function MainPane() {
    const users = UsersData()
    const tweets = TweetsData()
  return (
    <>
        <div className='mainPane'>
            <Header />
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
            {users.map((user, index)=>{
                return(
                    <div key={index} >
                        <Home user={user} tweets={tweets} />
                    </div>
                )
            })}
        </div>
    </>
  )
}
