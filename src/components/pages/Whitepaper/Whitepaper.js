import React from "react";
import "./Whitepaper.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import education from "../../../img/education.png";
import blockchainG from "../../../img/blockchainG.png";
import graph from "../../../img/graph.png";
import token from "../../../img/token.png";

const Whitepaper = () => {
	return (
		<div>
			<Navbar />

			<div className="whitepaper-section">
				<h1 className="whitepaper-heading">AFEN’S WHITEPAPER</h1>
			</div>
			<p className="whitepaper-p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
				pulvinar egestas tortor. Eu ut morbi donec diam sed tincidunt. Netus
				velit varius metus adipiscing diam.{" "}
				<Link className="continue-reading">Continue reading</Link> or Download.
			</p>

			<div className="whitepaper-doc-section">
				<nav id="navbar">
					<div class="sidebar">
						<ul>
							<li>
								<a href="#overview" class="nav-link" id="intro">
									Overview
								</a>
							</li>
							<li>
								<a href="#real-estate" class="nav-link">
									Real estate
								</a>
							</li>
							<li>
								<a href="#arts" class="nav-link">
									Arts
								</a>
							</li>
							<li>
								<a href="#education" class="nav-link">
									Education
								</a>
							</li>
							<li>
								<a href="#blockchain" class="nav-link">
									Blockchain: Revolutionizing the Market
								</a>
							</li>
							<li>
								<a href="#afen" class="nav-link">
									AFEN: The Ultimate Combination
								</a>
							</li>
							<li>
								<a href="#afen_token" class="nav-link">
									AFEN Token Utilities
								</a>
							</li>
							<li>
								<a href="#afen_services" class="nav-link">
									AFEN Services
								</a>
							</li>
							<li>
								<a href="#afen_team" class="nav-link">
									AFEN Team
								</a>
							</li>
							<li>
								<a href="#reference" class="nav-link">
									Reference
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<main id="main-doc">
					<section class="main-section" id="overview">
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

					<section class="main-section" id="real-estate">
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

					<section class="main-section" id="arts">
						<header>
							3<h2>Arts</h2>
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

						<header>
							3.1<h2>Art in Africa</h2>
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

					<section className="main-section" id="education">
						<header>
							<h2>Education</h2>
						</header>
						<p>
							Global Education and Training Expenditure is set to reach at least
							$10T by 2030 as population growth in developing markets fuels a
							massive expansion and technology drives unprecedented re-skilling
							and up-skilling in developed economies.
						</p>
						<img src={education} alt="" />
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
						<header>
							4.1<h2>Education in Africa</h2>
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

					<section className="main-section" id="blockchain">
						<header>
							5<h2>Blockchain: Revolutionizing the Market</h2>
						</header>
						<p>
							The global blockchain market size is expected to grow from USD 3.0
							billion in 2020 to USD 39.7 billion by 2025, at an impressive
							Compound Annual Growth Rate (CAGR) of 67.3% during 2020–2025. The
							increasing need for simplifying the business processes and need
							for supply chain management applications integrated with the
							blockchain technology will drive the overall blockchain market.
						</p>
						<img src={blockchainG} alt="" />
						<img src={graph} alt="" />
						<header>
							5.1<h2>Blockchain & Real Estate</h2>
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
						<header>
							5.2<h2>Blockchain & Art</h2>
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
						<header>
							5.3<h2>Blockchain & Education</h2>
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
					<section className="main-section" id="afen">
						<header>
							6<h2>AFEN: The Ultimate Combination</h2>
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
						<header>
							6.1<h2>AFEN & Real Estate</h2>
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
						<header>
							6.2<h2>AFEN & Arts</h2>
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
						<header>
							6.3<h2>AFEN & Education</h2>
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
					<section className="main-section" id="afen_token">
						<header>
							<h2>AFEN Token Utilities</h2>
						</header>
						<img src={token} alt="" className='token'/>

						<table>
							<tr>
								<th>PARTICULARS</th>
								<th>DESCRIPTION</th>
							</tr>
							<tr>
								<td>Staking</td>
								<td>
									<ul>
										<li>
											Pool of tokens that pay rewards over time based on lockup
											and interest.
										</li>
										<li>
											Interest will scale based on a “lock-up” period that a
											user can choose.
										</li>
										<li>
											Instead of using a traditional savings type stake where
											interest is earned based on the date of deposit, users can
											stake tokens on a system that works more like a
											certificate of deposit.
										</li>
										<li>
											If they want to stake 6 months, they earn a percentage of
											interest, but if they choose to stake for a year, they
											earn more interest maybe something like a 20% bump from
											the 6-month stake.
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
											partnering platforms, user can gain a small percentage of
											tokens back at the end of a tracking period.
										</li>
										<li>
											This will promote the spending of our tokens on different
											marketplaces.
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
								<td>AFEN Education
Payments</td>
								<td>
									<ul>
										<li>If we allow educators to upload content to our
										platform. We will pay them for every course
										completion that their course holds.</li>
										<li>This will be a very small fraction of tokens based on
										the price of our tokens.</li>
										<li>This will bring higher quality courses to our platform
										by incentivizing content creators to get viewers.</li>
										<li> Over time and rise in price of our token we will
										fractionalize the pay out to scale growth.</li>
									</ul>
								</td>
							</tr>

							<tr>
								<td>AFEN Real Estate
Payments</td>
								<td>
									<ul>										
										<li>Users can choose to purchase property which is listed
										via AFEN token and get a percentage discount on the
										transaction fee.</li>
										<li>Money is escrowed upon sale, and tax paid to the
										government.</li>
										<li>Ownership will then be transferred to the buyer upon
										confirmation of all requirement</li>
									</ul>
								</td>
							</tr>

							<tr>
								<td>Referral Tokens |
Transaction Fee
Share</td>
								<td>
									<ul>
										<li>If a user refers another user to our platform.</li>
										<li>They then will get a certain allocation of the
										transactions fees we earn from any user that they
										onboarded.</li>
										<li>This will bring users onto our platform to earn AFEN
										tokens.</li>
									</ul>
								</td>
							</tr>
						</table>
					</section>
					<section className="main-section" id="afen_services">
						<header>8
							<h2>AFEN Services</h2>
						</header>

						<table>
							<tr>AFEN & ART</tr>
							<tr><td></td></tr>
						</table>
						<p></p>
						<p></p>
						<p></p>
					</section>
					<section className="main-section" id="afen_team">
						<header>
							<h2>AFEN Team</h2>
						</header>
						<p></p>
						<p></p>
						<p></p>
					</section>
					<section className="main-section" id="reference">
						<header>
							<h2>Reference</h2>
						</header>
						<p></p>
						<p></p>
						<p></p>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Whitepaper;
