import React, { useEffect, useState } from "react";
import "./DashboardLogin.css";
import Navbar from "../../molecules/Navbar/Navbar";
import useAdminCred from "../../../hooks/adminPostApi";
import { useHistory } from "react-router";
const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const { initLogin, loginData } = useAdminCred();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData?.email && formData?.password) initLogin(formData);
    return;
  };

  useEffect(() => {
    const { data, error } = loginData;
    if (data) {
      window.sessionStorage.setItem("isAuth", data);
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
    }
    if (error) window.alert("invalid credential");
  }, [loginData]);
  return (
    <>
      <Navbar />
      <div className="dashboardLogin-section">
        <h1 className="dashboardLogin-heading">login</h1>

        <form action="" className="formLogin" onSubmit={handleLogin}>
          <label htmlFor="email" id="emailLabel">
            Email
          </label>
          <input
            type="text"
            name=""
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="password" id="passwordLabel">
            password
          </label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <input type="submit" value="POST " id="loginBtn" />
        </form>
      </div>
    </>
  );
};

export default Dashboard;
