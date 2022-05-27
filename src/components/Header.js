import React from 'react'
import reactLogo from '../images/logo.png'


export default function Header(){
    return(
        <div className='d-flex'>
            <img src={reactLogo} alt="React logo" className='react-logo'/>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}