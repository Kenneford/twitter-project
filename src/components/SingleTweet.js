import React from 'react'
import './SingleTweet.css'
import {useNavigate, useState, useEffect} from 'react-router-dom';
export default function SingleTweet({users, tweets}) {

    const navigate = useNavigate()

    // const navigateBack = () =>{
    //     navigate("/home")
    // }
  return (
    <div className='tweet-page'>
        <h3 className='tweet-h3'>
        {/* <i onClick={navigateBack} className="fa-solid fa-arrow-left"></i>Tweet */}
        <i onClick={() =>navigate('/home')} className="fa-solid fa-arrow-left"></i>Tweet
        </h3>
    </div>
  )
}
