import React from "react";
// import PropTypes from "prop-types";

function Alert(props) {
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalized(props.alert.type)} </strong>{" "}
          {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
