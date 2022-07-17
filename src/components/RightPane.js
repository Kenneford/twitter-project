import React from 'react'
import './RightPane.css'

export default function RightPane({users}) {

  return (
    <div className='rightPane'>
        <div className='rightPane-search'>
            <input type='text' 
            placeholder='Search Twitter' />
            <i className="fa-solid fa-magnifying-glass" id="search" title="Search"></i>
        </div>
        <div className='trends'>
            <h2>Trends for you</h2>
            <div className='politics'>
                <p className='p-trend'>Politics . Trending</p>
                <h3 className='p-h3'>#JustKennForPresident2022</h3>
                <p className='p-tweets'>45.8K Tweets</p>
            </div>
            <div className='sports'>
                <p className='s-trend'>Sports . Trending</p>
                <h3 className='s-h3'>#JustinForPresident2022</h3>
                <p className='s-tweets'>500.2K Tweets</p>
            </div>
            <div className='germany'>
                <p className='g-trend'>Trending in Germany</p>
                <h3 className='g-h3'>#JustKenn</h3>
                <p className='g-tweets'>22.6K Tweets</p>
            </div>
            <button className='trends-btn'>Show more</button>
        </div>

        <div className='follow'>
            <h2>Who to follow</h2>
            <div className='userFollow'>
                <img src={users[0].picture} alt='user-image1'/>
                <div className='user-name'>
                    <p>{users[0].name.first} {users[0].name.last}</p>
                    <p className='nickName'>@{users[0].username}</p>
                </div>
                <button className="follow-btn"> Follow </button>
            </div>
            <div className='userFollow'>
                <img src={users[1].picture} alt='user-image1'/>
                <div className='user-name'>
                    <p>{users[1].name.first} {users[1].name.last} </p>
                    <p className='nickName'>@{users[1].username}</p>
                </div>
                <button className="follow-btn"> Follow </button>
            </div>
            <div className='userFollow'>
                <img src={users[4].picture} alt='user-image1'/>
                <div className='user-name'>
                    <p>{users[4].name.first} {users[4].name.last} </p>
                    <p className='nickName'>@{users[4].username}</p>
                </div>
                <button className="follow-btn"> Follow </button>
            </div>
            <div className='userFollow'>
                <img src={users[6].picture} alt='user-image1'/>
                <div className='user-name'>
                    <p>{users[6].name.first} {users[6].name.last} </p>
                    <p className='nickName'>@{users[6].username}</p>
                </div>
                <button className="follow-btn"> Follow </button>
            </div>
        </div>

        <div className='footer'>
            <div className='policies'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
            </div>
            <div className='policies'>
                <p>Imprint</p>
                <p>Accessibility</p>
                <p>Ads info</p>
                <p>More...</p>
            </div>
            <div className='policies'>
                <p>&copy; 2022 Twitter, Inc.</p>
            </div>
        </div>




        {/* <div>
            <h2>Who to follow</h2>
            <div className='userFollow'>
                <img src={users[0].picture} alt='user-image1'/>
                <div className='user-name'>
                    <p>{users[0].name.first} {users[0].name.last} </p>
                    <p className='nickName'>{users[0].username}</p>
                </div>
            <button className="follow-btn"> Follow </button>
        </div>

        <div className='userFollow'>
            <img src={users[1].picture} alt='user-image2'/>
                <div className='user-name'>
            <p>{users[1].name.first} {users[1].name.last} </p>
            <p className='nickName'>{users[1].username}</p>
                </div>
            <button className="follow-btn"> Follow </button>
        </div>

        <div className='userFollow'>
            <img src={users[2].picture} alt='user-image3'/>
                <div className='user-name'>
            <p>{users[2].name.first} {users[2].name.last} </p>
            <p className='nickName'>{users[2].username}</p>
                </div>
            <button className="follow-btn"> Follow </button>
        </div>
            </div>
        
            
            <div className='footer'>
                <div className='policies'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies Policy</p>
                </div>
            </div> */}
    </div>)}
