// import emailjs from "emailjs-com";
import React from 'react';
import './Contact.css'
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_ID",
//      "template_ID",
//      e.target,
//      "user_QwfDDJLvgPkPgc8Qab91D"
//      ).then(res=>{
//          console.log(res);
//      }).catch(err=> console.log(err));
//      window.location.reload();
//      e.target.reset();
// }

const Contact = () => {

   
    return (
        <div>
            <Navbar/>
            <h1 className='contact-heading'>Contact Us</h1>

            <div className='form-container'>
                <h3 className='sub-heading'>Send us a message</h3>

                <form >
                    <input type="text" name="name" id="name" placeholder="Your Name"/>
                    <input type="email" name="email" id="email" placeholder="Your E-mail address" className='contactEmail'/>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>

                    <input type="submit" value="Send" className='submit-btn' />
                </form>
            </div>

            <div className="our-socials">
                <h4 className='socials-heading'>Our socials</h4>
                <div className="socials">
                    <Link to='https://twitter.com/Afenblockchain' className='twitter social'><FaTwitter/></Link>
                    <Link to='http://t.me/afenblockchain' className='telegram social'><FaTelegramPlane /></Link>
                    <Link to='https://instagram.com/afenblockchain' className='instagram social'><AiFillInstagram/></Link>
                    <Link to='/' className='linkedin social'><AiFillLinkedin/></Link>
                    <Link to='https://www.reddit.com/r/AfenCommunity/' className='reddit social'><GrReddit/></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
