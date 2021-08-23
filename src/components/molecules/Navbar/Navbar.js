import React from "react";
import "./Navbar.css";
import afenLogo from "../../../img/afenLogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ backgroundColor, position, top }) => {
	const decor = {
		textDecoration: "none",
	};

	// let navlinks = document.querySelectorAll("nav-link");
	// navlinks.forEach((navlink) => {
	// 	navlink.addEventListener("click", function () {
	// 		navlinks.forEach((btn) => btn.classList.add("active"));
	// 		// this.classList.add('active');
	// 	});
	// });

	return (
		<div className="nav-container" style={{ backgroundColor, position, top }}>
			<NavLink to="/">
				<img className="logo" src={afenLogo} alt="" />
			</NavLink>

			<ul className="nav-links">
				<NavLink
					style={decor}
					exact
					to="/"
					activeClassName="active"
					className="nav-link"
				>
					Home
				</NavLink>
				<NavLink
					style={decor}
					exact
					to="/about"
					activeClassName="active"
					className="nav-link"
				>
					About
				</NavLink>
				<NavLink
					style={decor}
					exact
					to="/services"
					activeClassName="active"
					className="nav-link"
				>
					Services
					<li></li>
				</NavLink>
				<NavLink
					style={decor}
					exact
					to="/marketplace"
					activeClassName="active"
					className="nav-link"
				>
					Marketplace
				</NavLink>
				<NavLink
					style={decor}
					exact
					to="/whitepaper"
					activeClassName="active"
					className="nav-link"
				>
					Whitepaper
				</NavLink>
				<NavLink
					style={decor}
					to="/partners"
					activeClassName="active"
					className="nav-link"
				>
					Partners
				</NavLink>
				<NavLink
					style={decor}
					to="/blog"
					activeClassName="active"
					className="nav-link"
				>
					Blog
				</NavLink>
				<NavLink
					style={decor}
					to="/team"
					activeClassName="active"
					className="nav-link"
				>
					Team
				</NavLink>
			</ul>
			<Link style={decor} to="/contact" className="contact-us">
				Contact Us
			</Link>
		</div>
	);
};

export default Navbar;
