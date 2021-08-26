import React from "react";
import "./Dashboard.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { FaCamera } from "react-icons/fa";

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className="dashboard-section">
				<h1 className="dashboard-heading">create new blog post</h1>

				<form action="" className="form">
                    <div className='photo'>
                    <FaCamera className='camera-icon'/>
					<label htmlFor="image"></label>
					<input type="image" src="" alt="" id="image" height='50' width='100'  />

                    </div>

					<label htmlFor="title" id="titleLabel">
						Title
					</label>
					<input type="text" name="" id="title" />

					<label htmlFor="mediumLink" id="mediumLabel">
						Medium Link
					</label>
					<input type="text" name="" id="mediumLink" />
					<label htmlFor="content" id="contentLabel">
						Content
					</label>
					<textarea name="content" id="content" cols="30" rows="10"></textarea>


                    <input type="submit" value="POST " id='submitBtn' />
				</form>
			</div>
		</>
	);
};

export default Dashboard;
