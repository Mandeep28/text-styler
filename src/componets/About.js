import React from "react";

export default function About(props) {
  return (
    <div
      className="container text-center my-5"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="display-7 fw-bold">About Us</h1>

      <p className=" fs-5 ">
        This is a text utils web app create using
        <a href="https://reactjs.org">Reactjs</a>. This app will take the text
        from the user and convert it to upper case , lower case , remove all
        extra spaces. Here you can copy the text, clear the text box. All you
        can analyze how my words and character you Enter. The hero part of this
        app is you can find how my time you take to read the text (in minutes).
      </p>
      <button className="btn btn-dark  my-3" type="button">
        <a
          href="https://github.com/mandeep28"
          className="text-light text-decoration-none"
        >
          Visit Developer Profile
        </a>
      </button>
    </div>
  );
}
