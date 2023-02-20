import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import About from "./componets/About";
import React, { useState } from "react";
import Alert from "./componets/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [CustomcolorTheme, setCustomColorTheme] = useState(null);
  // function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // function to set the custom color
  const setCustomColor = (customColor) => {
    setCustomColorTheme(customColor);
  };

  // function to toggle dark mode or light mode
  const toggleBtn = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Styler"
          aboutText="About TextStyler"
          mode={mode}
          toggleBtn={toggleBtn}
          color={setCustomColor}
        />
        <Alert alert={alert} />

        <div className="container my-4">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try Text Styper - Covert Uppercase , Lowercase , remove extra spaces."
                  mode={mode}
                  showAlert={showAlert}
                  color={CustomcolorTheme}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
