import React from "react";
import CandidateForm from "../components/CandidateForm";
import Navbar from "../components/Navbar";
import image from "../assets/4.jpg";

const AddCandidate = () => {
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
          <CandidateForm />
        </div>
      </div>
    </>
  );
};

export default AddCandidate;
