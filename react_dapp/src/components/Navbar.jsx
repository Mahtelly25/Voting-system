import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { web3, logout, isLoggedIn } from "../utils/web3Engine";

// import { styles } from "./navbar.module.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  async function checkLoggedIn() {
    const loggedIn = await isLoggedIn();
    setLoggedIn(loggedIn);
  }
  useEffect(() => {
    checkLoggedIn();
  }, []);
  const login = async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    console.log(account);
  };
  return (
    <div className="w3-bar w3-padding">
      <span className="w3-large w3-bar-item w3-text-blue">KYFVoting</span>
      <Link to="/" href="" className="w3-bar-item w3-text-blue">
        Home
      </Link>
      <Link className="w3-bar-item w3-text-blue" to="/add-candidate">
        Add Candidate
      </Link>
      <Link className="w3-bar-item w3-text-blue" to="/candidates">
        Candidates
      </Link>
      <div className="w3-right">
        {loggedIn ? (
          <button className="w3-btn w3-border w3-round-xxlarge w3-blue">
            Log Out
          </button>
        ) : (
          <button
            className="w3-btn w3-border w3-round-xxlarge w3-blue"
            onClick={login}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
