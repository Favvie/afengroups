import React from "react";
import "./RealEstate.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
	return (
		<div className="service afen-real-estate">
			<Navbar />
			<div className="services ">
				<div className="headings">
					<h1 className="service-heading actived">AFEN AND EDUCATION</h1>
					<h1 className="service-heading actives">AFEN AND ART</h1>
				</div>

				<div className="right-col">
					<h1>AFEN AND REAL ESTATE</h1>
					<p>
						A peer-to-peer decentralized platform for the exchange of real
						estate products.
					</p>
					<p>Authenticate and transfer property ownership</p>
					<p>lowering transaction costs to near zero.</p>
					<p>
						Validate documentation through immutability enabled by blockchain
						technology.
					</p>
					<Link className="learn">Learn more</Link>

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
		</div>
	);
};

export default Services;
