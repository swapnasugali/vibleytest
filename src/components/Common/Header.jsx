import React from 'react'
import "./../../Styles/Header.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import account from "../../assets/account.jpg"
import { FaSearch } from 'react-icons/fa'


function Header() {
  return (
    <header className="header">

        <Link className="logo"> 
        <img src = {logo} alt ="Vibely"/>
        </Link>

        <nav>
            <Link to ="/" className = "home">HOME</Link>
            <Link to ="/event-organizers">EVENT ORGANIZERS</Link>
            <Link to ="/service-providers">SERVICE PROVIDERS</Link>
            <Link to ="/about-us">ABOUT US</Link>
        </nav>

        <div className="search">
        <FaSearch />

        <input
            type="text"
            placeholder="Search for Events, Organizers, Services"
        />
        </div>
            
        
        <Link to = "/" className="account">
        <img src = {account} alt="Account"/>
        </Link>


       </header>

    
  )
}

export default Header