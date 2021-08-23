import React from "react";
import "./Whitepaper.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";


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
				velit varius metus adipiscing diam.
				<Link to='/whitepaperData' className="continue-reading">Continue reading</Link> or <Link className="download">Download</Link>.
			</p>

		</div>
	);
};

export default Whitepaper;
