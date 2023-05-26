import { useRef } from "react";
import { contract, login } from "../utils/web3Engine";

const CandidateForm = () => {
  const candidateImage = useRef();
  const candidateName = useRef();
  const addCandidate = async () => {
    const name = candidateName.current.value;
    const sender = await login();

    contract.methods
      .NewCandidate(name)
      .send({ from: sender, gasLimit: "1000000" })
      .then((data) => console.log(data));
  };
  return (
    <div className="w3-auto" style={{ width: "40rem" }}>
      <div className="w3-white w3-padding w3-round-large">
        <h3>Add Candidate</h3>
        <hr />
        <label htmlFor="">Candidate Name</label>
        <input
          type="text"
          ref={candidateName}
          className="w3-input w3-border w3-round"
        />

        <br />
        <button onClick={addCandidate} className="w3-btn w3-round w3-blue">
          Register
        </button>
      </div>
    </div>
  );
};

export default CandidateForm;
