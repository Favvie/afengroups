import React, { useState } from "react";
import { Scrollchor } from "react-scrollchor";
import "./Services.css";
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ServicePageData } from "../../atoms/ServiceData";

const Services = () => {
	const [current, setCurrent] = useState(0);
	const length = ServicePageData.length;

	const prevSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const nextSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div className="service afen-art">
			<>
				<Navbar backgroundColor={"transparent"} />
				{ServicePageData.map((slide, index) => {
					return (
						<>
							{index === current && (
								<div key={index} className="services">
									<div className="headings">
										<h1 className="service-heading actived">
											{slide.firstHeading}
										</h1>
										<h1 className="service-heading actives">
											{slide.secondHeading}
										</h1>
									</div>

									<div className="right-col">
										<div>
											<h1>{slide.rightColHeading}</h1>
											<p>{slide.paragraphOne}</p>
											<p>{slide.paragraphTwo}</p>
											<p>{slide.paragraphThree}</p>
											<p>{slide.paragraphFour}</p>
											{/* <Link className='learn' to='/whitepaperData#art'>Learn more</Link> */}
											<Scrollchor className="learn" to="#art">
												Learn more
											</Scrollchor>
										</div>

										<div className="button-group">
											<span className="btn nav-left" onClick={prevSlide}>
												<AiOutlineArrowLeft />
											</span>
											<span className="btn nav-right" onClick={nextSlide}>
												<AiOutlineArrowRight />
											</span>
										</div>
									</div>
								</div>
							)}
						</>
					);
				})}
			</>

			<Footer />
		</div>
	);
};

export default Services;
