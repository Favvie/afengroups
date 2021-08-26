import React from "react";
import "./RealEstate.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../molecules/Footer/Footer";

const Services = () => {
	return (
		<div className="service afen-real-estate">
			<Navbar backgroundColor= {'transparent'}/>
			<div className="services ">
				<div className="headings">
					<h1 className="service-heading actived2">AFEN AND EDUCATION</h1>
					<h1 className="service-heading actives2">AFEN AND ART</h1>
				</div>

				<div className="right-col">
					<h1>AFEN AND REAL ESTATE</h1>
					<p>
						A peer-to-peer decentralized platform for the exchange of real
						estate products.
					</p>
					<p>Authenticate and transfer property ownership</p>
					<p>Lowering transaction costs to near zero.</p>
					<p>
						Validate documentation through immutability enabled by blockchain
						technology.
					</p>
					<Link className="learn" to='/whitepaperData#art'>Learn more</Link>

					<div className="button-group">
						<Link className="btn nav-left" to="/services/afen-education">
							<AiOutlineArrowLeft />
						</Link>
						<Link className="btn nav-right" to="/services">
							<AiOutlineArrowRight />
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Services;
