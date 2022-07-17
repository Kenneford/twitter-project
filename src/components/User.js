import React from 'react'
import './MainPane.css'

export default function User({user}) {
  console.log(user)
  return (
    <div className='mainPane'>
        {/* <h2>Home</h2> */}
        <p>Name: {user.name.title} {user.name.first} {user.name.last}</p>
        <p>Username: {user.username}</p>

    </div>
  )
}
