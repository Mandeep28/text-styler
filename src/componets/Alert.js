import React from "react";
// import PropTypes from "prop-types";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong className="text-capitalize">{props.alert.type}</strong>:{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
