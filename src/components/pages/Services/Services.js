import React from "react";
import "./Services.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
	return <div className='service afen-art'>
				<Navbar />
				<div className='services'>
					<div className="headings">
						<h1 className='service-heading actived'>AFEN AND REAL ESTATE</h1>
						<h1 className='service-heading actives'>AFEN AND EDUCATION</h1>
					</div>
					
					

					<div className='right-col'>
<<<<<<< HEAD
						<div>
							<h1>AFEN AND ART</h1>
							<p>The digitization of contemporary and legacy African arts</p>
							<p>An NFT marketplace where tokenized versions of legacy African arts will be bought and sold</p>
							<p>Revolutionizing the African art sector by increasing the value of these arts and increasing inflow</p>
							<Link className='learn'>Learn more</Link>
						</div>
						
						<div className="button-group">
							<button className='btn nav-left'><AiOutlineArrowLeft/></button>
							<button className='btn nav-right'><AiOutlineArrowRight/></button>
						</div>
					</div>
					

					
					
				</div>
{/* 				
				<div className="real-estate">
					<div className="headings">
						<h1 className='service-heading actives'>AFEN AND EDUCATION</h1>
						<h1 className='service-heading actives'>AFEN AND ART</h1>
					</div>
					<div className='right-col-1'>
						<h1>AFEN AND REAL ESTATE</h1>
						<p>A peer-to-peer decentralized platform for the exchange of real estate products.</p>
						<p>Authenticate and transfer property ownership</p>
						<p>lowering transaction costs to near zero.</p>
						<p>Validate documentation through immutability enabled by blockchain technology.</p>
						<Link className='learn'>Learn more</Link>

					</div>
					<div className="button-group">
						<button className='btn nav-left'><AiOutlineArrowLeft/></button>
						<button className='btn nav-right'><AiOutlineArrowRight/></button>			
					</div>
				</div>
								

				<div className="EDUCATION">
					<div className="headings">
						<h1 className='service-heading actives'>AFEN AND ART</h1>
						<h1 className='service-heading actives'>AFEN AND REAL ESTATE</h1>
					</div>
					<div className='right-col-2'>
						<h1>AFEN AND REAL EDUCATION</h1>
						<p>Produce as many cryptocurrency experts as possible.</p>
						<p>Courses in blockchain-related subjects and certification upon completion.</p>
						<p>Awarded certificates will be transferred as NFTs</p>
						<Link className='learn'>Learn more</Link>

					</div>
					<div className="button-group">
						<button className='btn nav-left'><AiOutlineArrowLeft/></button>
						<button className='btn nav-right'><AiOutlineArrowRight/></button>			
					</div>
				</div> */}
								
=======
						<h1>AFEN AND ART</h1>
						<p>The digitization of contemporary and legacy African arts</p>
						<p>An NFT marketplace where tokenized versions of legacy African arts will be bought and sold</p>
						<p>Revolutionizing the African art sector by increasing the value of these arts and increasing inflow</p>
						<Link className='learn'>Learn more</Link>

						<div className="button-group">
							<Link className='btn nav-left' to='/services/real-estate'><AiOutlineArrowLeft/></Link>
							<Link className='btn nav-right' to='/services/afen-education'><AiOutlineArrowRight/></Link>
						
						</div>
					</div>
				</div>

>>>>>>> 1d9b2384b1ccd79e2fb3bcd1dec963b47f964760

				
			</div>;
};

export default Services;
