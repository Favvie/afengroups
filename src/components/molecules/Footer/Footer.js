import React from "react";
import "./Footer.css";
import afenLogo from "../../../img/afenLogo.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer(){
  
    const decor = {
		textDecoration: "none",
	};


	return (
		<div className="footer">
            <div className="footer-top">
                <div className="newsletter">
                    <h4>Newsletter</h4>
                    <p>Subscribe for our newsletter</p>
                    <div className="input-group">
                     <form action="/signup" method="POST">
                        <input type="email" placeholder='Your E-mail address' className='email-input'/>
                        <button className="signUp-btn">Sign up</button>
                    </form>
                    </div>
                </div>
                <div className="company">
                    <img className="logo" src={afenLogo} alt="" />
                    <p className='company-p'>
                        A leading hub for African Blockchain-related collaborations with a
                        focus on Decentralized Finance, Arts, Real Estate and Education.
                    </p>
                </div>
                <div className="quicklinks">
                    <h3>Quick-links</h3>
                    <Link style={decor} to="/services" className='quick-link'>Services</Link>
                    <Link style={decor} to="/whitepaper" className='quick-link'>Whitepaper</Link>
                    <Link style={decor} to="/roadmap" className='quick-link'>Roadmap</Link>
                    <Link style={decor} to="/afenToken" className='quick-link'>Afen Token</Link>
                </div>
                <div className="go-to">
                    <h3>Go to</h3>
                    <Link style={decor} to="/team" className='go-to-link'>Teams</Link>
                    <Link style={decor} to="/partners" className='go-to-link'>Partners</Link>
                    <Link style={decor} to="/Contact" className='go-to-link'>Contact</Link>
                    <Link style={decor} to="/tokenAllocation" className='go-to-link'>Token Allocation</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    <ul className='afen'>
                        <li>&copy; Afen, Inc. All rights reserved. </li>
                        <li>Terms and Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                
                <div className="socials">
                    <Link to='https://twitter.com/Afenblockchain' className='twitter social'><FaTwitter/></Link>
                    <Link to='http://t.me/afenblockchain' className='telegram social'><FaTelegramPlane /></Link>
                    <Link to='https://instagram.com/afenblockchain' className='instagram social'><AiFillInstagram/></Link>
                    <Link to='' className='linkedin social'><AiFillLinkedin/></Link>
                    <Link to='https://www.reddit.com/r/AfenCommunity/' className='reddit social'><GrReddit/></Link>
                    
                </div>
                
            </div>
			
		</div>
	);
};

export default Footer;
