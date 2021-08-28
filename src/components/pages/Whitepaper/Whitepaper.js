import React from "react";
import "./Whitepaper.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import afendoc from '../../../document/afenwhitepaperdoc.pdf'

const Whitepaper = () => {
	return (
		<div>
			<div className="whitepaper-section">
				<Navbar backgroundColor={"transparent"} />

				<h1 className="whitepaper-heading">AFEN’S WHITEPAPER</h1>
			</div>
			<p className="whitepaper-p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
				pulvinar egestas tortor. Eu ut morbi donec diam sed tincidunt. Netus
				velit varius metus adipiscing diam. <br />
				<Link to="/whitepaperData" className="continue-reading">
				Continue reading
				</Link>{" "}
				or <Link className="download" to={afendoc} target='_blank' download='afenWhitepaper'>Download</Link>.
			</p>
		</div>
	);
};

export default Whitepaper;
