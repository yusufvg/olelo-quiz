import React from "react";

const NavBar = ({ score }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* title */}
        <h1 className="me-auto navbar-brand">Hō'ike Mo'omeheu Hawai'i</h1>

        {/* educational links */}
        {/* TODO handle collapse on smaller breakpoints */}

        <ul className="navbar nav">
          <li className="nav-item">
            <a href="https://www.instagram.com/ealaehcc/" className="nav-link">
              E Ala E Hawaiian Cultural Center
            </a>
          </li>
          <li className="nav-item">
            <a href="http://wehewehe.org/" className="nav-link">
              Nā Puke Wehe Wehe 'Õlelo Hawai'i
            </a>
          </li>
        </ul>

        {/* score card */}
        <div className="nav-item card m-x1">
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
