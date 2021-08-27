import React from "react";
import "./Education.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../molecules/Footer/Footer";

const Services = () => {
	return <div className='service afen-education'>
				<Navbar backgroundColor= {'transparent'} />
				<div className='services'>
					<div className="headings">
						<h1 className='service-heading actived1'>AFEN AND ART</h1>
						<h1 className='service-heading actives1'>AFEN AND REAL ESTATE</h1>
						
					</div>
					
					

					<div className='right-col-ed'>
						<h1>AFEN AND EDUCATION</h1>
						<p>Produce as many cryptocurrency experts as possible.</p>
						<p>Courses in blockchain-related subjects and certification upon completion.</p>
						<p>Awarded certificates will be transferred as NFTs</p>
						<Link className='learn' to='/whitepaperData#education'>Learn more</Link>

						<div className="button-group">
							<Link className='btn nav-left' to='/services'><AiOutlineArrowLeft/></Link>
							<Link className='btn nav-right' to='/services/real-estate'><AiOutlineArrowRight/></Link>
						
						</div>
					</div>
				</div>


			<Footer />
			</div>;
};

export default Services;
