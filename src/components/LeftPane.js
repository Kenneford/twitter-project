import React from 'react'
import logo from '../logo.svg'
import './LeftPane.css'
import {Link} from 'react-router-dom'
import UsersData from './UsersData'

export default function LeftPane() {
    const users = UsersData()
    console.log(users)
  return (
    <div className='leftPane'>
        <div className='leftPane-cont'>
            <div>
            <i className="fa-brands fa-twitter"></i>
            </div>
        
            <div className='leftPane-icons'>
                <div><a href=''><i className="fa-solid fa-house"></i> Home</a></div>
                <div><a href=''><i className="fa-solid fa-hashtag special"></i> Explore</a></div>
                <div><a href=''><i className="fa-regular fa-bell special"></i> Notification</a></div>
                <div><a href=''><i className="fa-regular fa-envelope"></i> Message</a></div>
                <div><a href=''><i className="fa-regular fa-bookmark"></i> Bookmark</a></div>
                <div><a href=''><i className="fa-brands fa-elementor special"></i> Lists</a></div>
                <div><a href=''><i className="fa-regular fa-user special"></i> Profile </a> </div>
                <div><a href=''><i className="fa-brands fa-gg-circle special"></i> More</a></div>
                <button>Tweet</button>
            </div>
            <div className='user'>
                <Link to='/'>
                    <img src={users[3].picture} alt='user-profile' width='50px'/>
                    <div className='user-name'>
                        <p className='user-firstName'>{users[3].name.first} {users[3].name.last}</p>
                        <p className='nickName'>@{users[3].username}</p>
                    </div>
                    <div className='dots'>...</div>
                </Link>
            </div>
        </div>
    </div>
  )
}
