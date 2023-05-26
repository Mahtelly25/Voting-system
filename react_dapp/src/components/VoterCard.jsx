import React from "react";
import image from "../assets/react.svg";


const VoterCard = ({ voterData, onVote }) => {
  const url = "http://localhost:3000";
  console.log(voterData);
  return (
    <div className="w3-row-padding w3-auto w3-stretch">
      <h4>Candidates</h4>
      {voterData &&
        voterData.map(({ name, id, Count_Of_Votes }, index) => {
          return (
            <div className="w3-col l4 m3" key={index}>
              <div className="w3-card">
                <br />
                <div></div>
                <div className="w3-center">
                  <h5>{name}</h5>
                  <h1>{Count_Of_Votes}</h1>
                  <button
                    className="w3-btn w3-blue"
                    onClick={onVote}
                    value={id}
                  >
                    vote
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VoterCard;
