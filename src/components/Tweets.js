import React from 'react'
import './Tweets.css'
import {useNavigate, useParams} from 'react-router-dom';

export default function SingleTweet({user, tweet}) {
    const {author_id} = useParams();

    const navigate = useNavigate()

    // const navigateBack = () =>{
    //     navigate("/home")
    // }
  return (
    <div className='singlePane'>
        <h3 className='tweet-h3'>
        {/* <i onClick={navigateBack} className="fa-solid fa-arrow-left"></i>Tweet */}
        <i onClick={() =>navigate('/home')} className="fa-solid fa-arrow-left"></i>Tweet
        </h3>
        <div className='tweet-content'>
            {tweet.filter(tweet => tweet.author_id === author_id).map((tweet, index) =>{
                return(
                    <div key={index}>
                        <div className='tweetUser-wrap'>
                            <div className='tweetUser-info'>
                                <img src={user.picture} alt='user-profile' width='50px'  height="50px"/>
                                <p className='tweet-user'>{user.name.first} {user.name.last}</p>
                                <p className='nickName'>@{user.username}</p> 
                                <div className='div-dot'>.</div>
                                <p className='tweet-date'>{tweet.date}</p>
                            </div>
                            <p className='more-dots'><i className="fa-solid fa-ellipsis"></i></p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
