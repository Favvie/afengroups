import React from 'react';
import './Contact.css'
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='contact-heading'>Contact Us</h1>

            <div className='form-container'>
                <h3 className='sub-heading'>Send us a message</h3>

                <form action="#" method="post">
                    <input type="text" name="name" id="name" placeholder="Your Name"/>
                    <input type="email" name="email" id="email" placeholder="Your E-mail address" />
                    <textarea name="message" id="message" cols="30" rows="10">Your message</textarea>

                    <input type="submit" value="Submit" className='submit-btn' />
                </form>
            </div>

            <div className="our-socials">
                <h4 className='socials-heading'>Our socials</h4>
                <div className="socials">
                    <Link to='/' className='twitter social'><FaTwitter/></Link>
                    <Link to='/' className='telegram social'><FaTelegramPlane /></Link>
                    <Link to='/' className='instagram social'><AiFillInstagram/></Link>
                    <Link to='/' className='linkedin social'><AiFillLinkedin/></Link>
                    <Link to='/' className='reddit social'><GrReddit/></Link>
                    <Link to='/' className='facebook social'><AiFillFacebook/></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
