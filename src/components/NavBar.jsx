import React from "react";

const NavBar = ({ score }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">Hō'ike Mo'omeheu Hawai'i</h1>
        <div className="card">
          <p className="m-2">
            <span className="badge bg-primary rounded-pill m-2">
              {score} Points
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
