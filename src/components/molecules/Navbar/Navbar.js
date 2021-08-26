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
			<NavLink to="/">
				<img className="logo" src={afenLogo} alt="" />
			</NavLink>
			<FaBars onClick={showSidebar} className="hamburger" />

			<ul
				onClick={showSidebar}
				className={sidebar ? "nav-links " : "nav-links activated"}
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

// const Nav = styled.div`
// 	padding: 0 5%;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	flex-wrap: wrap;

// 	@media (max-width: 768px) {
// 		padding: 0;
// 	}
// `;
// const Menu = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;

// 	@media (max-width: 768px) {
// 		overflow: hidden;
// 		flex-direction: column;
// 		width: 100%;
// 		height: 100%;
// 		justify-content: space-evenly;
// 	}
// `;
// const Hamburger = styled.div`
// 	display: none;
// 	flex-direction: column;
// 	cursor: pointer;
// 	color: white;

// 	span {
// 		height: 1px;
// 		width: 25px;
// 		margin: 0 auto 4px auto;
// 		border-radius: 5px;
// 		background: white;
// 	}

// 	@media (max-width: 768px) {
// 		display: flex;
// 		padding-left: 30%;
// 	}

export default Navbar;
