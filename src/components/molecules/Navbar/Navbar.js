import React, { useState } from "react";
import "./Navbar.css";
import afenLogo from "../../../img/afenLogo.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Navbar = ({ backgroundColor, position, top, display }) => {
	const [sidebar, setSidebar] = useState(false);

	const decor = {
		textDecoration: "none",
	};

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div
			className="nav-container"
			style={{ backgroundColor, position, top, display }}
		>	
			<Link to="/">
				<img className="logo" src={afenLogo} alt="" />
			</Link>
			<FaBars onClick={showSidebar} className="hamburger" />

			<ul
				onClick={showSidebar}
				className={sidebar ? "nav-links activate" : "nav-links"}
			>
				<span className="close-icon">
					<FaTimes onClick={() => setSidebar(!sidebar)} />
				</span>
				<NavLink
					// onClick={() => setToggle(!toggle)}
					className="nav-link"
					style={decor}
					exact
					to="/"
					activeClassName="active"
				>
					Home <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/about"
					activeClassName="active"
				>
					About <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/services"
					activeClassName="active"
				>
					Services <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/marketplace"
					activeClassName="active"
				>
					Marketplace <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/whitepaper"
					activeClassName="active"
				>
					Whitepaper <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/partners"
					activeClassName="active"
				>
					Partners <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/blog"
					activeClassName="active"
				>
					Blog <GoChevronRight className="right-icon" />
				</NavLink>
				<NavLink
					className="nav-link"
					style={decor}
					exact
					to="/team"
					activeClassName="active"
				>
					Team <GoChevronRight className="right-icon" />
				</NavLink>
			</ul>
			<Link to="/contact" style={decor} className="contact-us">
				Contact Us
			</Link>
		</div>
	);
};

export default Navbar;
