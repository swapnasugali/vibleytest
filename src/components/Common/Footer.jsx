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
                 
                <div className="footer-email">
                    <p>Email : </p>

                    <a href="mailto:support@vibely.com">
                        support@vibely.com
                    </a>
                </div>

                <div>
                    <p>Adress : </p>
                <a href="https://www.google.com/maps/search/?api=1&query=23%2F5%2C+Galaxy+Plaza%2C+Ananthapur%2C+Andhra+Pradesh" target="_blank"  rel=" noopener noreferrer">
                    23/5, Galaxy plaza, Ananthapur, Andhra Pradesh.
                </a>
               </div>
            </div>


            <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="#usp">USP of Vibely Events</a>

                <a href="#services">Our Services</a>

                <a href="#why-choose-us">Why Choose Us</a>

                <a href="#portfolio">Portfolio</a>

                <a href="#contact">Contact Us</a>
                
            </div>

            <div className="footer-section">
                 <h3>FOLLOW US ON</h3>

            <div className="social-icons">
                <a className="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
                </a>

                <a  className="twitter" href="https://x.com/" target="_blank" rel="noreferrer">
                <FaXTwitter />
                </a>

                <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
                </a>

            </div>
            </div>
            

        </div>
    </footer>
  )
}

export default Footer