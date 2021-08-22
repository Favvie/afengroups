import React from "react";
import "./Homepage.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Footer from "../../molecules/Footer/Footer";
import afroImg from "../../../img/nft-afro-img.jpg";
import cashback from "../../../img/cashback.png";
import educational from "../../../img/educational.png";
import marketplace from "../../../img/marketplace-payment.png";
import realEstate from "../../../img/real-estate.png";
import stake from "../../../img/stake.png";
import priceGraph from "../../../img/price_graph.svg";
import cardlogo from '../../../img/cardlogo.png';


const Homepage = () => {
	const decor = {
		textDecoration: "none",
	};

	return (
		<div className="home-container">
			<div className="container">
				<Navbar />

				<div className="hero-section">
					<h4 className="company-name">AFEN GROUP</h4>
					<h1 className="hero-heading">
						Revolutionizing Opportunities Through Blockchain
					</h1>
					<p className="hero-p">
						AFEN is Africa’s leading NFT project, with the aim to revolutionize
						key potential sectors- namely Arts, Real Estate and Education. The
						AFEN project has gone past preliminary stage to involve a team of
						enthusiastic cryptocurrency marksmen adequately skilled and ready to
						deliver a working platform for the excahnge of digital arts,
						facilitation of real estate investments, and Blockchain Education.
					</p>

					<Link style={decor} to="/" className="learn-more">
						Learn More
					</Link>
				</div>
			</div>

			<div className="features-section">
				<h4 className="afen_token">AFEN is powered by the $AFEN token.</h4>
				<h4 className="purchase">
					Purchase $AFEN token from any of these outlets
				</h4>
				<ul className="sponsors">
					<li className="active">Bitmart</li>
					<li className="sponsor">Julswap</li>
					<li className="sponsor">CoinGecko</li>
					<li className="sponsor">Pancake Swap</li>
					<li className="sponsor">Coin MarketCap</li>
				</ul>

				<div className='features-price'>
					<div className='features-text'>
						<h3 className='features-title'>AFEN Blockchain</h3>
						<p className='features-p'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
							nulla laoreet egestas cursus lectus. Ultricies ac vivamus elit et
							ut augue. Augue mollis pretium aliquet feugiat cursus. Eu pulvinar
							ultricies aliquam a scelerisque. Parturient et eget habitasse sed.
						</p>
						<Link style={decor} to="/" className="buy-now">
							Buy Now
						</Link>
					</div>

					<div className="price-graph">
						<div className="price-graph-top">
							<p>
								Powered by CoinGecko <BsBoxArrowUpRight />
							</p>
						</div>

						<div className="price-graph-middle">
							<div className='pricelogo'>
								<img src={cardlogo} alt="" />
								<div className='priceName'>
									<h4>Afen Blockchain</h4>
									<p>No. 1703</p>
								</div>
							</div>
							<img src={priceGraph} alt=""/>
							<div className='price'>
								<h4>Price</h4>
								<p>$0.007596</p>
							</div>

						</div>
					</div>
				</div>

				<div className="features">
					<div className='feature-list'>
						<div className='feature'>
							<img src={stake} alt="" />
							<h4>STAKE & EARN</h4>
							<p>By staking AFEN tokens over a period of time, users can earn staking rewards based on interest accrued over time and the duration of their lock-up.</p>
						</div>
						<div className='feature'>
							<img src={cashback} alt="" />
							<h4>CASHBACK ON TRANSACTIONS</h4>
							<p>When our users engage in transactions using AFEN tokens either on our platform or partnering platforms, we offer....</p>
						</div>
						<div className='feature'>
							<img src={educational} alt="" />
							<h4>EDUCATIONAL INCENTIVE</h4>
							<p>In a situation where an educator uploads their course(s) on our platform, they will be incentivized for every course completion that their content holds.</p>
						</div>
						<div className='feature'>
							<img src={realEstate} alt="" />
							<h4>REAL ESTATE PAYMENTS</h4>
							<p>Users can decide to purchase properties that are listed via AFEN and get a percentage discount on the transcation fee: money is escrowed upon sale and tax is paid to the government. Ownership is transferred to the buyer upon confirmation of all requirements.</p>
						</div>
						<div className='feature'>
							<img src={marketplace} alt="" />
							<h4>ART - NFT MARKETPLACE PAYMENTS</h4>
							<p>When users to choose to conduct their transactions using AFEN tokens on our NFT marketplace, the get a percentage discount on transaction fees. Users also have the option of paying in other crypto currencies for the full transcation fees.</p>
						</div>
					</div>
				</div>

				<div className="nft-afro-section">
					<div className='afro-text'>
						<h2 className='afro-title'>AFROX NFTS</h2>
						<p className='afro-p'>AFRO X represents a confluence of modern, mystic and ancient African design as illustrated by stellar African Afromysterics and 3D digital artist, Jesse Tomi, put together by the AFEN blockchain group with the help of African historians and ancient African art curators.</p>
						<p className='afro-p'>AFROXNFTs represent the core of African existence, displaying a mixture of culture and futurism. The collection is represented by 3 afro beings and a mythical creature: A man, a woman, a genderless child, and a masquerade.</p>
						<Link style={decor} to='/' className='buy-now'>Buy now</Link>
					</div>
					<div className='afro-img'><img src={afroImg} alt="" /></div>

				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Homepage;
