import React from 'react'
import { Outlet } from 'react-router'
import './StoriesHeader.css'

export default function StoriesHeader() {
  return (
    <div className='story-head'>
        <div className='left-head'>
            <div className='logo'>
                <h3 className='logo-letter'>Y</h3>
            </div>
            <h3>Hacker News</h3>
            <p>new</p> | {''}
            <p>past</p> | {''}
            <p>comment</p> | {''}
            <p>ask</p> | {''}
            <p>show</p> | {''}
            <p>jobs</p> | {''}
            <p>submit</p> | {''}
        </div>
        <div className='right-head'>
            <p>login</p>
        </div>
        {/* <Outlet /> */}
    </div>
  )
}