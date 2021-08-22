import React from "react";
import "./Partners.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import bolden from "../../../img/bolden.png";
import capital from "../../../img/capital.png";
import moonrepublic from "../../../img/moonrepublic.png";
import nfty from "../../../img/nfty.png";
import ntdc from "../../../img/ntdc.png";
import picda from "../../../img/picda.png";
import Footer from "../../molecules/Footer/Footer";

const Partners = () => {
	return (
		<div className="partners-section">
			<div className="partners">
				<Navbar />
			</div>

			<div className="partners-hero-section">
				<h1 className="partner-heading">OUR PARTNERS</h1>

				<div className="partners-cards">
					<div className="partner">
						<img src={ntdc} alt="" />
						<h1>NTDC</h1>
						<p>
							Being the first government backed NFT initiative in Africa goes
							beyond tell tale. We are supported and endorsed by the National
							tourism development corporation in Nigeria. This collectively
							benefits the core of the industry in which we operate as it is a
							step in the right direction towards mass adoption of the world's
							most talked about disruptive technology: blockchain.{" "}
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
					<div className="partner">
						<img src={moonrepublic} alt="" />
						<h1>MOONREPUBLIC</h1>
						<p>
							We are essentially an Afrocentric project providing solutions
							through the blockchain for Africa. In doing so, brands such as
							moon republic come in handy for strategic positioning across
							social channels in Africa. We have taken advantage of this
							mutually beneficial partnership to gain ground in the region.
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
					<div className="partner">
						<img src={capital} alt="" />
						<h1>MERIDIAN CAPITAL</h1>
						<p>
							Meridian capital have supported the NFT project from inception
							being a serial investor in key projects set to revolutionize
							sectors of the world economy. The chain of investment for Meridian
							cuts across new technology, Real estate, retail leasing etc.
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
					<div className="partner">
						<img src={nfty} alt="" />
						<h1>NFTY LABS</h1>
						<p>
							NFTY Labs is a foundation focusing on the growth of NFT ecosystems
							by building open-sourced, community-based tools that will unlock
							inherent utility and value within NFTs. NFTY Lab’s goal is to
							create new applications that offer new utilities for NFTs. In line
							with this, we have partnered with NFTY LABS to set the ball
							rolling taking NFTs to a new height.{" "}
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
					<div className="partner">
						<img src={bolden} alt="" />
						<h1>BOLDEN VENTURES</h1>
						<p>
							We have also locked hands in partnership with Bolden ventures; a
							seed stage venture firm founded by Jonah Bolden, Australian
							basketball player and NFT collector. We are certain that this
							partnership strategically presents AFEN as a platform of choice
							for NFT activities.
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
					<div className="partner">
						<img src={picda} alt="" />
						<h1>PICTDA</h1>
						<p>
							We have also locked hands in partnership with Bolden ventures; a
							seed stage venture firm founded by Jonah Bolden, Australian
							basketball player and NFT collector. We are certain that this
							partnership strategically presents AFEN as a platform of choice
							for NFT activities.
						</p>
						<Link className='learnMore'>Learn more</Link>
					</div>
				</div>

                <button className='load-more'>Load More</button>
			</div>
            <Footer />
		</div>
	);
};

export default Partners;
