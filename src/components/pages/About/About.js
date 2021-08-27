import React from "react";
import "./About.css";
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import roadmap from "../../../img/roadmap-img.png";
import roadmap1 from "../../../img/roadmap-svg.svg";
import piechart from "../../../img/piechart.png";
import piechartData from "../../../img/piechart-data.png";
const About = () => {
	return (
		<>
			<Navbar />
			<div className="about-hero-section">
				<h1 className="about-heading">ABOUT US</h1>
				<p className="about-p">
					AFEN is Africa’s leading NFT project, with the aim to revolutionize
					key potential sectors- namely Arts, Real Estate, and Education. The
					AFEN project has gone past preliminary stage to involve a team of
					enthusiastic cryptocurrency marksmen adequately skilled and ready to
					deliver a working platform for the exchange of digital arts,
					facilitation of Real estate investments, and Blockchain education.
				</p>
			</div>

			<div className="roadmap-section">
				<div>
					<h1 className="roadmap">ROADMAP</h1>
					<div className="roadmap-img">
						<img src={roadmap} alt="" className='roadmap-image'/>
						<img src={roadmap1} alt="" className='roadmap-image1'/>				
					</div>
					<div className="timeline1">
						<h1>JULY 2021</h1>
						<p>- Government Artifact Listing</p>
						<p>- AFEN Art Marketplace Product Launch</p>
					</div>
					<div className="timeline2">
						<h1>SEPTEMBER 2021</h1>
						<p>- Government Artifacts Listings</p>
						<p>- More listings on CEX & DEX</p>
						<p>- AFEN Education Partnerships: Incubation</p>
					</div>
					<div className="timeline3">
						<h1>NOVEMBER 2021 - FEBRUARY 2022</h1>
						<p>- AFEN Real estate partnership: Incubation</p>
						<p>- AFEN Real estate partnership announcements</p>
					</div>

					<div className="timeline4">
						<h1>AUGUST 2021</h1>
                        <p>- Launch of NFT Minting and Sales by Individual Artists</p>
                        <p>- AFEN NFT Marketplace Launch</p>
						
					</div>

					<div className="timeline5">
						<h1>OCTOBER 2021</h1>
                        <p>- AFEN Education Project Announcements</p>
						
					</div>

					<div className="timeline6">
						<h1>MARCH - APRIL 2022</h1>
                        <p>- New Product Announcements</p>
						
					</div>
				</div>
				<div className="tokens">
					<h1 className="tokenomics">tokenomics</h1>
					<div className="tokenomics-img">
						<div className='pie'>
							<img src={piechart} alt="" className="piechart-img" />
						</div>
						<div className='pieData'>
							<img src={piechartData} alt="" className="piechartData" />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default About;
