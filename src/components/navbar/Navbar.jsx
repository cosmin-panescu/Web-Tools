import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper df-r">
                <Link to='/password-generator' className='nav-link'>
                    <h2>Password Generator</h2>
                </Link>
                <Link to='/qr-generator' className='nav-link'>
                    <h2>QR Code Generator</h2>
                </Link>
                <Link to='/url-shortener' className='nav-link'>
                    <h2>Link Shortener</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar