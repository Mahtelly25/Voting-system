import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { web3, contract } from "../utils/web3Engine";
import VoterCard from "../components/VoterCard";
import image from "../assets/4.jpg";

const Home = () => {
  const [contractData, setContractData] = useState(null);
  const handleVote = async (e) => {
    try {
      const index = e.target.value;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      await contract.methods
        .vote(index)
        .send({ from: account, gasLimit: "1000000" })
        .then((data) => {
          console.log(data);
          alert("Voted successfully, Sweet");
        })
        .catch((e) => {
          if (e.message.includes("You have already voted")) {
            alert("you have allready voted");
          }
          console.log(e.message);
        });
      getVoters();
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(contractData);
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "570px",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w3-center w3-text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "570px" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ fontWeight: "600" }}>
            Experience Voting on another Level
          </h1>
          <button className="w3-button w3-border w3-round w3-border-white">
            See Candidates
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
