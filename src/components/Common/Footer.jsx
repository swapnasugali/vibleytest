import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import "./../../Styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-about">

                <Link to = "/">
                <img src = {logo} alt ="Vibely Events"/>
                </Link>

                <p>
                    Vibely Events is your all-in-one event planning platform.
                    We bring everything together to help you plan and celebrate
                    with confidence.
                </p>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email: VibelyEvents.com</p>
                <p>
                    Address: 23/6, Galaxy Plaza,
                    <br />
                    Ananthapur, Andhra Pradesh.
                </p>
            </div>


            <div className="footer-section">
                <h3>Quick Links</h3>
                <Link to="/">USP of Vibely Events</Link>
                <Link to="/">Our Services</Link>
                <Link to="/">Why Choose Us</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/">Contact Us</Link>
            </div>

            <div className="footer-section">
                 <h3>FOLLOW US ON</h3>

            <div className="social-icons">
                <span className="linkedin">
                <FaLinkedinIn />
                </span>

                <span className="twitter">
                <FaXTwitter />
                </span>

                <span className="instagram">
                <FaInstagram />
                </span>
            </div>
            </div>
            

        </div>
    </footer>
  )
}

export default Footer