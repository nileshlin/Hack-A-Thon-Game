 import React, { useState } from "react";
import "./CreateTeam.css";
import { useLocation } from "react-router-dom";

const CreateTeam = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  console.log(userId);

  const [emails, setEmails] = useState([]);

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const groupName = e.target.newGroupName.value;
    console.log("Group Name:", groupName, "Emails:", emails);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      const email = e.target.value.trim();
      if (email && validateEmail(email)) {
        setEmails((prevEmails) => [...prevEmails, email]);
        e.target.value = "";
      }
    }
  };

  const handleDeleteEmail = (emailToDelete) => {
    setEmails((prevEmails) => prevEmails.filter((email) => email !== emailToDelete));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="main-question-bx">
      <div className="question-bx">
        <h5 className="text-center">Create a New Group/Team</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="newGroupName"
              name="newGroupName"
              placeholder="Add group name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="searchGroup"
              name="searchGroup"
              placeholder="Add members email"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="email-list">
            {emails.map((email, index) => (
              <div key={index} className="email-item">
                <span>{email}</span>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDeleteEmail(email)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="button-group">
            {/* <button type="button" className="btn-qx2" onClick={handleBack}>
              Back
            </button> */}
            <button type="submit" className="btn-qx1">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;
