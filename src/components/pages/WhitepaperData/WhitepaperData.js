import React, { useState } from "react";
import "./WhitepaperData.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import education from "../../../img/education.png";
import blockchainG from "../../../img/blockchainG.png";
import graph from "../../../img/graph.png";
import token from "../../../img/token.png";
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";

const WhitepaperData = () => {
	const [ toggle, setToggle ] = useState(false)
	const [ toggle1, setToggle1 ] = useState(false)
	const [ toggle2, setToggle2 ] = useState(false)
	const [ toggle3, setToggle3 ] = useState(false)
	const [ sidebars, setSidebars ] = useState(false)

	const height = {
		height: '90px',
	}
	
	const active = {
		color: '#BF8B4B',
	}

	const notActive = {
		color: '#000',
	}

	return (
		<div>			
			<Navbar position={"sticky"} top={"0"}/>
			<div className="whitepaper-doc-section">
				<nav className="navbar">
					<div className='whitepaper-btn' onClick={() => setSidebars(!sidebars)}>
						{sidebars ? <FaTimes /> : <FaBars />}
					</div>
					<div className={sidebars ? 'sidebar ' : 'sidebar activating'} onClick={() => setSidebars(!sidebars)}>
						
						<ul>
							<li>
								<a href="#overview" className="nav-link" id="intro">
									Overview <GoChevronRight  />
								</a>
							</li>
							<li>
								<a href="#real-estate" className="nav-link">
									Real estate <GoChevronRight  />
								</a>
							</li>
							<li onClick={() => setToggle(!toggle)}>
								<a href="#art" className="nav-link">
									Arts
									{ toggle ? <GoChevronDown  /> : <GoChevronRight  />}
								</a>

								<ul className={toggle ? 'panelshow' : 'panelhide'}>
									<li>
										<a href="#arts">3.1. Art in Africa</a>
									</li>
								</ul>
							</li>
							<li onClick={() => setToggle1(!toggle1)}>
								<a href="#education" className="nav-link">
									Education { toggle1 ? <GoChevronDown  /> : <GoChevronRight  />}
								</a>

								<ul className={toggle1 ? 'panelshow' : 'panelhide'}>
									<li>
										<a href="#educations">4.1 Education in Africa</a>
									</li>
								</ul>
							</li>
							<li onClick={() => setToggle2(!toggle2)}>
								<a href="#blockchain" className="nav-link">
									Blockchain: Revolutionizing the Market{" "}
									{ toggle2 ? <GoChevronDown  /> : <GoChevronRight  />}
								</a>

								<ul className={toggle2 ? 'panelshow' : 'panelhide'}>
									<li>
										<a href="#blockchains">5.1 Blockchain & Real Estate</a>
									</li>
									<li>
										<a href="#blockchainss">5.2 Blockchain & Art</a>
									</li>
									<li>
										<a href="#blockchainsss">5.3 Blockchain & Education</a>
									</li>
								</ul>
							</li>
							<li onClick={() => setToggle3(!toggle3)}>
								<a href="#afen" className="nav-link" style={toggle3 ? active : notActive}>
									AFEN: The Ultimate Combination{" "}
									{ toggle3 ? <GoChevronDown  /> : <GoChevronRight  />}
								</a>

								<ul className={toggle3 ? 'panelshow' : 'panelhide'}>
									<li>
										<a href="#afens">6.1 AFEN & Real Estate</a>
									</li>
									<li>
										<a href="#afenss">6.2. AFEN & Arts</a>
									</li>
									<li>
										<a href="#afensss">6.3. AFEN & Education</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#afen_token" className="nav-link">
									AFEN Token Utilities{" "}
									<GoChevronRight  />
								</a>
							</li>
							<li>
								<a href="#afen_services" className="nav-link">
									AFEN Services <GoChevronRight  />
								</a>
							</li>
							<li>
								<a href="#afen_team" className="nav-link">
									AFEN Team <GoChevronRight  />
								</a>
							</li>
							<li>
								<a href="#reference" className="nav-link">
									Reference <GoChevronRight  />
								</a>
								{/* <div id="#reference" style={height}></div> */}
							</li>
						</ul>
					</div>
				</nav>

				<main className="main-doc">

					<div id="overview" style={height}></div>
					<section className="main-section" id="overview">
						<header>
							<h2>overview</h2>
						</header>
						<p>
							We aim to become “a leading hub for African Blockchain-related
							collaborations with a focus on Decentralized Finance, Arts, Real
							Estate and Education. AFEN has the objective of combining
							blockchain’s immutable data structure and the backing of
							government bodies to provide legitimacy to products.
						</p>
						<p>
							African culture and art are in abundance and if we package and
							verify the authenticity of its sourcing, buyers will be more
							willing to invest in the art. Our brand can be legitimate and the
							promotion of African culture.
						</p>
						<p>
							Real-Estate NFT’s paired with Government backing would be at the
							forefront of innovation as the buyer will be able to trust the
							legitimacy of their ownership. This will be somewhat of a first in
							the space.
						</p>
						<p>
							The value of the company is legitimacy. Government backing,
							decentralized ownership, and revenue being generated to original
							creators and owners.
						</p>
					</section>


					<div id="real-estate" style={height}></div>
					<section className="main-section" id="real-estate">
						<header>
							<h2>real estate</h2>
						</header>
						<p>
							In the past years, private equity firms have taken Africa’s real
							estate market by storm with millions of dollars in investments,
							especially in the commercial and hospitality sectors, and we
							believe the Nigerian market is one of the most sought after, due
							to the huge returns possible.
						</p>
						<p>
							The growing interest in the Nigerian market is as a result of huge
							demand buoyed by increasing urban population and changing shopping
							culture among the expanding middle class, which has resulted in
							the construction of numerous shopping malls.
						</p>
						<p>
							Growth in the sector has also been enhanced by the entrance and
							expansion of new and existing multinational companies in sectors
							such as ICT, oil and gas, retail merchandising and finance. The
							upturn in economic activity; experienced from Q4 2011 to date, has
							led to an increase in demand and supply for commercial and highend
							residential real estate development, particularly in the key
							cities of Abuja, Lagos, and Port Harcourt.
						</p>
						
						<p>
							The Nigerian market remains attractive as there are numerous
							opportunities available in the sector. There are opportunities for
							both institutional investors and real estate developers. We have
							identified viable opportunities in the following segments of the
							market for the immediate term:
							<ul>
								<li>Hospitality</li>
								<li>Shopping malls</li>
								<li>Office blocks, and</li>
								<li>Serviced flats</li>
							</ul>
						</p>
						
					</section>

					<div id="art" style={height}></div>
					<section className="main-section" id="art">
						<header>
							<h2>3. Arts</h2>
						</header>
						<p>
							The global art market is a marketplace of buyers and sellers
							trading in the services, articles, and works-of-art and culture
							commonly associated with the various arts. While the market
							remains predominantly offline, online sales have seen increasing
							growth in recent years. The global art market was valued at over
							67 billion U.S. dollars in 2018, up from almost 64 billion the
							previous year. This increase is also shown in the volume of global
							art sales which reached approximately 40 million transactions in
							2018, up from 39 million the previous year.
						</p>

						<div id="arts" style={height}></div>
						<header>
							<h2 id='arts'>3.1 Art in Africa</h2>
						</header>
						<p>
							African art and culture have thrived for generations, however,
							historically it has been challenging for local creatives and
							collectors in Africa to preserve the value of cultural assets that
							they produce, or own.
						</p>

						<p>
							Traditional fine art has a huge market, which has been used by
							affluent investors to diversify their portfolios, but it has been
							largely inaccessible to consumers and retail investors due to
							gatekeepers like auction houses that influence what art is deemed
							“valuable”.
						</p>
					</section>
					
					<div id="education" style={height}></div>
					<section className="main-section" id="">
						<header>
							<h2>4. Education</h2>
						</header>
						<p>
							Global Education and Training Expenditure is set to reach at least
							$10T by 2030 as population growth in developing markets fuels a
							massive expansion and technology drives unprecedented re-skilling
							and up-skilling in developed economies.
						</p>
						<img className='whitepaper-image' src={education} alt="" />
						<p>
							The next decade will see an additional 350 million post-secondary
							graduates and nearly 800 million more K12 graduates than today.
							Asia and Africa are the driving force behind the expansion.
						</p>
						<p>
							The world needs to add 1.5 million teachers per year on average,
							approaching 100 million in total. 50% teach in Pre-K and Primary.
							Post-Secondary teaching will undergo the biggest expansion and
							change as the role of the teacher represents more of that of a
							mentor/coach than ‘sage on the stage’.
						</p>
						
						<div id="educations" style={height}></div>
						<header>
							<h2 id='educations'>4.1 Education in Africa</h2>
						</header>
						<p>
							Of all regions, sub-Saharan Africa has the highest rates of
							education exclusion. Over one-fifth of children between the ages
							of about 6 and 11 are out of school, followed by one-third of
							youth between the ages of about 12 and 14. According to UIS data,
							almost 60% of youth between the ages of about 15 and 17 are not in
							school.
						</p>
						<p>
							Without urgent action, the situation will likely get worse as the
							region faces a rising demand for education due to a still-growing
							school-age population.
						</p>
					</section>

					<div id="blockchain" style={height}></div>
					<section className="main-section" id="">
						<header>
							<h2>5. Blockchain: Revolutionizing the Market</h2>
						</header>
						<p>
							The global blockchain market size is expected to grow from USD 3.0
							billion in 2020 to USD 39.7 billion by 2025, at an impressive
							Compound Annual Growth Rate (CAGR) of 67.3% during 2020–2025. The
							increasing need for simplifying the business processes and need
							for supply chain management applications integrated with the
							blockchain technology will drive the overall blockchain market.
						</p>
						<img className='whitepaper-image' src={blockchainG} alt="" />
						<img className='whitepaper-image' src={graph} alt="" />

						<div id="blockchains" style={height}></div>
						<header>
							<h2 id='blockchains'>5.1 Blockchain & Real Estate</h2>
						</header>
						<p>
							Real estate has not escaped blockchain disruption either.
							Previously, transacting high value assets such as real estate
							exclusively through digital channels has never been the norm. Real
							estate transactions are often conducted offline involving
							face-to-face engagements with various entities. Blockchain,
							however, opened up ways to change this. The introduction of smart
							contracts in blockchain platforms now allows assets like real
							estate to be tokenized and be traded like cryptocurrencies like
							bitcoin and ether.
						</p>
						<p>
							Trading real estate this way varies. Here are six ways blockchain
							has changed the real estate game:
						</p>
						<ol>
							<li>
								Platforms and Marketplaces. Blockchain introduces new ways to
								trade real estate and can enable trading platforms and online
								marketplaces to support real estate transactions more
								comprehensively.
							</li>
							<li>
								No Intermediaries. Cutting out the intermediaries will result in
								buyers and sellers getting more out of their money as they save
								on commissions and fees charged by these intermediaries. This
								also makes the process much quicker as the back-and-forth
								between these middlemen gets cut.
							</li>
							<li>
								Liquidity. As tokens, real estate can be readily traded. A
								seller does not have to wait for a buyer who can afford the
								whole property to get some value out of their property.
							</li>
							<li>
								Fractional Ownership. Through blockchain, investors would simply
								have to access a trading app to buy and sell even fractions of
								tokens as they see fit. In addition, fractional ownership would
								also help them avoid managing the properties themselves such as
								maintenance and leasing.
							</li>
							<li>
								Decentralization. Blockchain commands trust and security as a
								decentralized technology. Information stored in the blockchain
								is accessible to all peers on the network, making data
								transparent and immutable.
							</li>
							<li>
								Costs. Beyond the savings made by cutting out intermediaries’
								professional fees and commissions, there are other costs such as
								inspections costs, registration fees, loan fees, and taxes
								associated with real estate. These costs even vary depending on
								the territory that has jurisdiction. Like intermediaries, these
								can be reduced or even eliminated from the equation as platforms
								automate these processes and make them part of the system.
							</li>
						</ol>
						<p>
							Employing real estate agents to market property can be costly to
							property owners and consumers, which creates countless extra fees
							and processes involved in property purchase that go beyond the
							price of the property. But blockchain technology helps to cut down
							some of those costs by reducing the intermediaries.
						</p>
						<p>
							Blockchain is essentially an online ledger that manages recorded
							transactions. What makes it innovative is that the ledger is
							distributed, meaning anyone connected to the network has a copy of
							it.
						</p>
						<div id="blockchainss" style={height}></div>
						<header>
							<h2 id='blockchainss'>5.2 Blockchain & Art</h2>
						</header>
						<p>
							Art and NFTs allow users to exchange digital ownership in a
							fashion that was not capable before. Becoming a collector of an
							art piece allows you to own it and as you sell it there is a
							contract the grant the creator or minter a royalty.
						</p>
						<p>
							Thanks to blockchain technology, new platforms are arising and
							drive a quiet revolution in how art is being bought, sold,
							supported, enjoyed, and even created.
						</p>
						<p>
							Using tokens to represent assets on a blockchain offers several
							advantages for art collectors:
						</p>
						<ol>
							<li>
								Own shares of artwork. For one, it can make the process of
								securitization much easier and less costly than it is today,
								involving fewer and sometimes no intermediaries. That in turn
								makes fractional ownership of expensive pieces of art (or any
								highly valuable item) much more viable than has been in the
								past.
							</li>
							<li>
								Verify authenticity and provenance. Because tokens can be used
								to represent information as well as assets, blockchain-based
								platforms can allow large groups of people to share trusted data
								without relying on a central authority. This too can lead to
								larger, more liquid and, importantly, more secure, and
								trustworthy online art markets – markets in which credentials
								for artworks, artists, buyers, and sellers can be easily
								authenticated and where transfers of value can be securely
								carried out directly between parties.
							</li>
							<li>
								Protect ‘digital Picassos’. because blockchain-based tokens are
								unique and uncopiable, they can be used as the basis for purely
								digital artworks that cannot be forged and whose ownership can
								be clearly asserted, maintained, and transferred. This can – and
								is – opening up new types of art and digital collectibles
								markets.
							</li>
						</ol>

						<div id="blockchainsss" style={height}></div>
						<header>
							<h2 id='blockchainsss'>5.3 Blockchain & Education</h2>
						</header>
						<p>
							Decentralized education brings open-source platforms to the table
							that cannot be changed. History books will no longer be subject to
							change. There will be more available access to those without it.
						</p>
						<p>
							There are many applications and benefits of blockchain-based
							ledger technologies for education:vii
						</p>

						<ol>
							<li>
								Student records. Academic transcripts are one of the most
								time-consuming, labor-intensive tasks in academic institutions
								today. Before issuing a certified transcript of a student’s
								grades, each entry must be manually verified to ensure accuracy.
								Another kind of student record that is frequently requested is
								the certification of course contents. If this information were
								stored on a blockchain, with just a few clicks, a person could
								obtain a complete, verified record of content courses and all
								academic achievements.
							</li>
							<li>
								Diplomas and certificates. Just like grades, a student’s
								diplomas and credentials could be issued and stored on a
								blockchain. Instead of asking the institution emitting the
								diploma to certify a paper copy, employers would only need to be
								provided with a link to a digital diploma.
							</li>
							<li>
								Badges. Besides degrees, a person’s typical resume contains a
								lot of additional information that could be relevant to
								employers. We are talking about foreign language skills,
								technical knowledge or specific abilities not necessarily
								related to a person’s profession.
							</li>
							<li>
								File storage. If institutions want to store digital curricula,
								records, degrees, and other information, that is going to use a
								lot of file storage space. Saving everything on local hard
								drives brings us back to the issue of centralizing the files. A
								possible solution would be blockchain-based cloud storage
								services.
							</li>
							<li>
								Lessons and courses. Many blockchains are also smart-contract
								capable. That means that lessons and courses can be programmed
								into the blockchain and executed automatically when certain
								conditions are met.
							</li>
							<li>
								Publishing. Undergrad and grad students, teachers, professors,
								and researchers constantly generate quality material. Publishing
								on a blockchain could help new writers, researchers and many
								others break into the industry. Blockchains could also help with
								rights management and protection against piracy.
							</li>
							<li>
								Lower costs. Many of the applications mentioned above mean that
								many timeconsuming, labor-intensive processes would be
								automated. This leads to lower costs for institutions, which in
								turn could translate into savings for students, who may not need
								to spend years paying off loans. Schools and universities could
								also reduce costs related to file storage space and by cutting
								out middlemen in many activities.
							</li>
							<li>
								Rewards. The computer nodes that constantly verify the integrity
								of the information stored on a blockchain receive rewards in the
								form of digital tokens like bitcoin or ether. This is what is
								called cryptocurrency mining.
							</li>
						</ol>
					</section>
					
					<div id="afen" style={height}></div>
					<section className="main-section" id="afen">
						<header>
							<h2>6. AFEN: The Ultimate Combination</h2>
						</header>
						<p>
							Now, imagine the powerful combination of Blockchain with Real
							Estate, Arts and Education: AFEN.
						</p>
						<p>
							At AFEN Blockchain Group we believe in the power of strategic
							networking and collaborations in building sustainable wealth.
						</p>
						<p>
							Our vision is to become a leading hub for Blockchain related
							collaborations with focus on Decentralized Finance, Art, and
							Education.
						</p>
						<p>
							NFTs have become hugely popular with crypto users and companies
							alike because of the way they revolutionized the collectibles
							space. Our pillars are largely based on products that can be
							tokenized. We look to build a dynamic platform offering all these
							products and services on an NFT-based platform.
						</p>
						<ol>
							<li>
								We would love to expose more and more people to crypto. This
								will be achieved by awarding newbies to take up courses on areas
								they are interested in. All our certifications from the crypto
								education platform will be NFTs (Non-fungible Tokens).
							</li>
							<li>
								We want to connect Governments across Africa with opportunities
								within the blockchain space - such as NFTs - to revolutionize
								artifacts and collectibles in Africa into NFTs thereby
								generating revenues for the Government and Private sector.
							</li>
							<li>
								We look to award top performers in the crypto space with NFTs in
								various categories. The idea is to have the community give
								incentives for those they think are doing a great job in our
								space.
							</li>
							<li>
								Networking has been a major contributor to the growth we have
								seen in crypto this far. We would love to enhance networking by
								opening our platform to those who are looking to connect and
								learn from each other.
							</li>
							<li>
								We believe all these activities will create opportunity for
								growth across board. For that reason, we believe great talent
								will get opportunity to thrive. We will offer opportunity for
								incubation for the most promising projects and individuals.
							</li>
							<li>
								Lastly, we look to lift the underserved in community by creating
								a charity platform. We would love to be a channel for those
								looking to stretch a hand of help. Our channel will, however, be
								only crypto and NFT based. This we hope, will become the future
								of charity as the finance space rapidly transforms
							</li>
						</ol>

						<div id="afens" style={height}></div>
						<header>
							<h2 id='afens'>6.1 AFEN & Real Estate</h2>
						</header>
						<p>
							We want to revolutionize the Real estate industry by
							authenticating home ownership and making peer-to-peer property
							sales possible on the Blockchain.
						</p>
						<p>
							This reduces overall cost of acquiring property and is also
							beneficial for bequeathing land after death.
						</p>

						<div id="afenss" style={height}></div>
						<header>
							<h2 id='afenss'>6.2. AFEN & Arts</h2>
						</header>
						<p>
							We want to create a mainstream art movement that democratizes the
							creation, ownership, and discovery of indigenous art. Instead of
							private institutions determining the value of artwork, a community
							of millions of consumers will, as they can easily own the token
							representing the art and use it to establish a digital cultural
							identity.
						</p>
						<p>
							With our platforms, we will digitize ownership through NFT's on
							the Binance Smart Chain. These ERC721 standard tokens will
							represent unique ownership of an asset with the capability of
							peer-to-peer transaction. Each NFT will go through a process of
							being specified and minted on chain where they will be kept as an
							immutable receipt of ownership.
						</p>

						<div id="afensss" style={height}></div>
						<header>
							<h2 id='afensss'>6.3. AFEN & Education</h2>
						</header>
						<p>
							Many industries are now paying close attention to Blockchain
							technology. Blockchain technology is broadly applicable, highly
							disruptive and could shape our future as much as AI or the
							Internet.
						</p>
						<p>
							We will love to expose more people to crypto and support careers
							in Blockchain technology. This will be achieved by awarding
							newbies and startups to take up trainings on areas they are
							interested in. All our certifications from the crypto education
							platform will be NFTs.
						</p>
						<p>
							For this reason, we believe great talent will get opportunity to
							thrive. We will also offer opportunities for incubation to the
							most promising blockchain projects and individuals.
						</p>
					</section>
					
					<div id="afen_token" style={height}></div>
					<section className="main-section" id="afen_token">
						<header>
							<h2>7. AFEN Token Utilities</h2>
						</header>
						<img src={token} alt="" className="whitepaper-image" />

						<table>
							<thead>
								<tr>
									<th>PARTICULARS</th>
									<th>DESCRIPTION</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Staking</td>
									<td>
										<ul>
											<li>
												Pool of tokens that pay rewards over time based on
												lockup and interest.
											</li>
											<li>
												Interest will scale based on a “lock-up” period that a
												user can choose.
											</li>
											<li>
												Instead of using a traditional savings type stake where
												interest is earned based on the date of deposit, users
												can stake tokens on a system that works more like a
												certificate of deposit.
											</li>
											<li>
												If they want to stake 6 months, they earn a percentage
												of interest, but if they choose to stake for a year,
												they earn more interest maybe something like a 20% bump
												from the 6-month stake.
											</li>
										</ul>
									</td>
								</tr>

								<tr>
									<td>Cash Back on Transactions</td>
									<td>
										<ul>
											<li>
												For transactions using AFEN tokens on our platform and
												partnering platforms, user can gain a small percentage
												of tokens back at the end of a tracking period.
											</li>
											<li>
												This will promote the spending of our tokens on
												different marketplaces.
											</li>
										</ul>
									</td>
								</tr>

								<tr>
									<td>Art Marketplace | Discounted Transaction Fees:</td>
									<td>
										<ul>
											<li>
												Users can choose to pay transactions fees via AFEN token
												on our marketplace for NFTs.
											</li>
											<li>
												By doing this they can get a percentage discount on the
												transaction fee.
											</li>
											<li>
												This promotes spending like the cash back program would.
											</li>
											<li>
												They can also pay in other cryptos for the full fee.
											</li>
											<li>
												This will be specific to marketplaces hosted by AFEN.
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>AFEN Education Payments</td>
									<td>
										<ul>
											<li>
												If we allow educators to upload content to our platform.
												We will pay them for every course completion that their
												course holds.
											</li>
											<li>
												This will be a very small fraction of tokens based on
												the price of our tokens.
											</li>
											<li>
												This will bring higher quality courses to our platform
												by incentivizing content creators to get viewers.
											</li>
											<li>
												{" "}
												Over time and rise in price of our token we will
												fractionalize the pay out to scale growth.
											</li>
										</ul>
									</td>
								</tr>

								<tr>
									<td>AFEN Real Estate Payments</td>
									<td>
										<ul>
											<li>
												Users can choose to purchase property which is listed
												via AFEN token and get a percentage discount on the
												transaction fee.
											</li>
											<li>
												Money is escrowed upon sale, and tax paid to the
												government.
											</li>
											<li>
												Ownership will then be transferred to the buyer upon
												confirmation of all requirement
											</li>
										</ul>
									</td>
								</tr>

								<tr>
									<td>Referral Tokens | Transaction Fee Share</td>
									<td>
										<ul>
											<li>If a user refers another user to our platform.</li>
											<li>
												They then will get a certain allocation of the
												transactions fees we earn from any user that they
												onboarded.
											</li>
											<li>
												This will bring users onto our platform to earn AFEN
												tokens.
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
					
					<div id="afen_services" style={height}></div>
					<section className="main-section" id="afen_services">
						<header>
							<h2>8. AFEN Services</h2>
						</header>

						<table>
							<thead>
								<tr>
									<th colSpan="2">AFEN & ART</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Service Infrastructure</td>
									<td>
										<p>
											The AFEN Art Marketplace will be the premier hub for
											minting and trading verified African Art Pieces.
										</p>
										<p>Our Art listings will come in three forms:</p>
										<ol>
											<li>
												<h4>Government Partnerships</h4>
												<p>
													Government backed listings will be artifacts and art
													that is sponsored by the hosting government, certified
													as a digital collectible of a sponsored item.
												</p>
											</li>
											<li>
												<h4>Individual Artist Listings</h4>
												<p>
													Our individual listings will be projects that are
													curated by any artist willing to list Art pieces via
													the AFEN platform. Those who mint art on our platform
													can set the terms of royalties made on the secondary
													market sales. Our market will be open for global
													customers to buy and relist art pieces purchased on
													the AFEN platform.
												</p>
											</li>
											<li>
												<h4>Individual African Artist Listings</h4>
												<p>
													Our individual African listings will be projects that
													are curated by any verified African artists. Anyone on
													the platform can purchase and resell art listings, but
													only verified artists of Africa can mint pieces for
													initial sale
												</p>
											</li>
										</ol>
										<p>
											We will have an identity verification process for African
											artists to submit to our team. Once verified they will
											receive a badge showing their status and will become part
											of our "African Artists Collective" where users can
											purchase their minted pieces.
										</p>
									</td>
								</tr>

								<tr>
									<td className="table-heading">Example</td>
									<td>
										<ul>
											<li>
												An African artist completes KYC/AML and is listed as a
												verified artist account.
											</li>
											<li>
												They then mint their first NFT on the AFEN marketplace
												and sell it for 500 AFEN tokens.
											</li>
											<li>
												They pay a 10% transaction fee to the network as well as
												the gas fee associated with the on-chain transfer.
											</li>
											<li>
												They have the right to set a royalty charge on resale of
												the item.
											</li>
											<li>
												The buyer of this item then decides to re-list the NFT
												for sale.
											</li>
											<li>
												They will pay the transaction fee to the network as well
												as the specified royalty by the seller.
											</li>
											<li>
												This will continue throughout the lifecycle of the NFT.
											</li>
										</ul>
									</td>
								</tr>

								<tr>
									<th colSpan="2">AFEN & EDUCATION</th>
								</tr>
								<tr>
									<td>Service Infrastructure</td>
									<td>
										<p>
											AFEN Education platform will be an open-source platform
											where users can create course content for the education of
											others.
										</p>
										<p>
											We will begin by focusing on topics dealing with
											blockchain and will be sold to good education and
											streaming Platform.
										</p>
										<p>
											However, content creators will have the opportunity to
											create content in any range of subjects they find to be
											useful.
										</p>
										<p>
											Some interesting course topics could be personal finance,
											mathematics, tutorials on programming, and many other
											subject matters.
										</p>
										<p>
											We will incentivize content creators by paying them a very
											small fraction of an AFEN token for each course
											completion. Also if a user completes a course on our
											platform, they will be awarded with digital certificate
											and AFEN tokens.
										</p>
									</td>
								</tr>

								<tr>
									<td>Example</td>
									<td>
										<ul>
											<li>
												A content creator uploads a course to our platform
												called “Personal Finance: Building Your Net Worth”.
											</li>
											<li>Our users have access to this course for free.</li>
											<li>
												They will be able to rate the course and will have a
												minimal amount of buffer adds prior to lessons
												beginning.
											</li>
											<li>
												Once they pass the course and complete it. We will give
												the content owner credit for a completion.
											</li>
										</ul>

										<p>
											If a creator wants to charge for their course because it
											has premier content. We will partner and allow them to do
											so.
										</p>

										<p>
											We will have the option of giving our users a certificate
											of completion NFT that will verify their completion
											transcript on our education platform.
										</p>
									</td>
								</tr>
								<tr>
									<th colSpan="2">AFEN & REAL ESTATE</th>
								</tr>
								<tr>
									<td>Service Infrastructure</td>
									<td>
										<p>
											AFEN real-estate program will allow for the peer-to-peer
											sale and transfer of home ownership through smart
											contracts that automate traditional home sales with a
											broker.
										</p>
										<p>
											By using our platform users will be able to cut the
											brokerage fee from a typical 10% down to our 1%
											facilitation fee. On top of this we will create a system
											for paying taxes partnered with the government for
											appropriate compliance with government regulations.
										</p>
										<p>
											Our goal is to accomplish a legitimized structure for
											digital certificates of ownership for real-estate which is
											recognized by the governing bodies we operate in. This
											system will bring power to the users and give the ability
											for eased international investment.
										</p>
										<h4>
											Smart contract specifically designed to automate the
											process of selling a real estate.
										</h4>
										<ol>
											<li>Property is listed on a peer-to-peer network.</li>
											<li>Property is bought by another user.</li>
											<li>Money is escrowed upon sale.</li>
											<li>
												We set standard for how taxes are then delivered to the
												government.
											</li>
											<li>
												Through this we work through government partnership
												where they verify real-estate tokens as a certificate of
												ownership.
											</li>
											<li>
												Confirmation of sale and pre-disposed arguments being
												met. The ownership is then transferred to the buyer.
											</li>
										</ol>
									</td>
								</tr>
								<tr>
									<td>Example</td>
									<td>
										<ul>
											<li>
												Steve lists his house for 100 BNB or AFEN and Jim has
												decided to buy it.
											</li>
											<li>
												He will accept the contract and his payment will be sent
												to an escrow wallet specified by the contract.
											</li>
											<li>
												Our contract will then automate the process of selling
												the house by Nigerian regulations and documents will be
												verified.
											</li>
											<li>
												After this process the ownership will transfer to Jim
												and the BNB or AFEN will be sent to Steve.
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
					
					<div id="afen_team" style={height}></div>
					<section className="main-section" id="afen_team">
						<header>
							<h2>
								10. About AFEN Team -
								<Link to="/team">https://afengroup.com/team</Link>
							</h2>
						</header>
					</section>

					<div id="reference" style={height}></div>
					<section className="main-section" id="reference">
						<header>
							<h2> 11. Reference</h2>
						</header>

						<p>
							i GrandViewResearch, “Real Estate Market Size Worth $4,263.7
							Billion By 2025” from
							https://www.grandviewresearch.com/press-release/global-real-estate-market
						</p>

						<p>
							ii Statista, “Art market worldwide - statistics & facts” from
							https://www.statista.com/topics/1119/art-market/
						</p>

						<p>
							iii Holon IQ, “$10 Trillion Global Education Market in 2030” from
							https://www.holoniq.com/2030/10-trillion-global-education-market/
						</p>

						<p>
							iv Markets and Markets, “Blockchain Market by Component (Platform
							and Services), Provider (Application, Middleware, and
							Infrastructure), Type (Private, Public, and Hybrid), Organization
							Size, Application Area (BFSI, Government, IT & Telecom), and
							Region - Global Forecast to 2025” from
							https://www.marketsandmarkets.com/Market-Reports/blockchaintechnology-
							market-90100890.html
						</p>

						<p>
							v Investopedia, “How Blockchain Technology is Changing Real
							Estate” from
							https://www.investopedia.com/news/how-blockchain-technology-changing-real-estate/
						</p>
						<p>
							vi Julius Baer, “Three ways blockchain is reshaping the art world”
							from
							https://www.juliusbaer.com/es/insights/digital-disruption/three-ways-blockchain-isreshaping-
							the-art-world/ vii Getting Smart, “How Blockchain Could Impact
							Education in 2020 and Beyond” from
							https://www.gettingsmart.com/2020/02/how-blockchain-could-impact-education-in-2020-
							and-beyond/
						</p>
					</section>
				</main>
			</div>
		</div>
	);
};

export default WhitepaperData;
