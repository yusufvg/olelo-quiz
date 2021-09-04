import React from "react";

const NavBar = ({ score }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          'Ōlelo Quiz
        </a>
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
