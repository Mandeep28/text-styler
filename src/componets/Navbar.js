// import "../App.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // fucntions
  const handleGreenColor = () => {
    document.body.style.backgroundColor = "#b5ffcf";
    props.color("#b5ffcf");
  };
  const handleRedColor = () => {
    document.body.style.backgroundColor = "#f8d7da";
    props.color("#f8d7da");
  };
  const handleBlueColor = () => {
    document.body.style.backgroundColor = "#cff4fc";
    props.color("#cff4fc");
  };
  const handlePurpleColor = () => {
    document.body.style.backgroundColor = "#e1c2f6";
    props.color("#e1c2f6");
  };
  const handleDefaultColor = () => {
    document.body.style.backgroundColor = "white";
    props.color(null);
  };

  // component start
  return (
    <nav
      className={`navbar navbar-expand-sm border bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="btn-container my-3 m">
            <span className="outer-circle green" onClick={handleGreenColor}>
              <span className="inner-circle "></span>
            </span>
            <span className="outer-circle red" onClick={handleRedColor}>
              <span className="inner-circle "></span>
            </span>
            <span className="outer-circle purple" onClick={handlePurpleColor}>
              <span className="inner-circle "></span>
            </span>
            <span className="outer-circle blue" onClick={handleBlueColor}>
              <span className="inner-circle "></span>
            </span>
            <span className="outer-circle default" onClick={handleDefaultColor}>
              <span className="inner-circle "></span>
            </span>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleBtn}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Disable" : "Enable"} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set the titlte",
  aboutText: "About Us",
};
