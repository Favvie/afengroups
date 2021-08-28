import React from "react";
import "./DashboardLogin.css";
import Navbar from "../../molecules/Navbar/Navbar";

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className="dashboardLogin-section">
				<h1 className="dashboardLogin-heading">login</h1>

				<form action="" className="formLogin">
                    
					<label htmlFor="email" id="emailLabel">
						Email
					</label>
					<input type="text" name="" id="email" className='dashboardEmail'/>

					<label htmlFor="password" id="passwordLabel">
						password
					</label>
					<input type="password" name="" id="password" />
					
                    <input type="submit" value="LOGIN " id='loginBtn' />
				</form>
			</div>
		</>
	);
};

export default Dashboard;
