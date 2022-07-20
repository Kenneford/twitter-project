import React from 'react'
import { Link} from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
        <div className='header'>
            <h3 className='h3'>
                <Link to="/">Home</Link>
                <i className="fa-brands fa-galactic-senate" title='Top Tweets'></i>
            </h3>
        </div>
  )
}
