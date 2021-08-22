import React from "react";
import "./Navbar.css";
import afenLogo from "../../../img/afenLogo.png";
import { Link } from "react-router-dom";

const Navbar = ({backgroundColor}) => {
	const decor = {
		textDecoration: "none",
	};

	return (
		<div className="nav-container" style={{backgroundColor}}>
			<img className="logo" src={afenLogo} alt="" />

			<ul className='nav-links'>
				<Link style={decor} to="/">
					<li className='nav-link'>Home</li>
				</Link>
				<Link style={decor} to="/about">
					<li className='nav-link'>About</li>
				</Link>
				<Link style={decor} to="/services">
					<li className='nav-link'>Services</li>
				</Link>
				<Link style={decor} to="/marketplace">
					<li className='nav-link'>Marketplace</li>
				</Link>
				<Link style={decor} to="/whitepaper">
					<li className='nav-link'>Whitepaper</li>
				</Link>
				<Link style={decor} to="/partners">
					<li className='nav-link'>Partners</li>
				</Link>
				<Link style={decor} to="/blog">
					<li className='nav-link'>Blog</li>
				</Link>
				<Link style={decor} to="/team">
					<li className='nav-link'>Team</li>
				</Link>
			</ul>
			<Link style={decor} to="/contact" className="contact-us">
				Contact Us
			</Link>
		</div>
	);
};

export default Navbar;
