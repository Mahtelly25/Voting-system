import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import VoterCard from "../components/VoterCard";
import { contract, login } from "../utils/web3Engine";

const Candidates = () => {
  const [contractData, setContractData] = useState(null);
  async function getCandidates() {
    const count = await contract.methods.CountOfCandidates().call();
    const candidatePromises = [];

    for (let i = 1; i <= count; i++) {
      const promise = contract.methods.candidates(i).call();
      candidatePromises.push(promise);
    }

    const candidates = await Promise.all(candidatePromises);

    setContractData(candidates);
  }

  useEffect(() => {
    getCandidates();
  }, []);

  const handleVote = async (e) => {
    const candidateId = e.target.value;
    console.log(candidateId);
    const accountId = await login();
    console.log(accountId);
    const vote = await contract.methods
      .vote(candidateId)
      .send({ from: accountId, gasLimit: "1000000" })
      .then((data) => {
        console.log(data);
        alert("vote successful");
        getCandidates();
      })
      .catch((e) => {
        console.log(e.message);
        alert("you have allready voted");
      });
  };

  console.log(contractData);

  return (
    <>
      <Navbar />
      <VoterCard voterData={contractData} onVote={handleVote} />
    </>
  );
};

export default Candidates;
