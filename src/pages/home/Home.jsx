import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Link to='/password-generator' className='btn home-link'>
          <h2>Password Generator</h2>
        </Link>

        <Link to='/qr-generator' className='btn home-link'>
          <h2>QR Code Generator</h2>
        </Link>

        <Link to='/url-shortener' className='btn home-link'>
          <h2>Link Shortener</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home 