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
      message: message,
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
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
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
                  heading="Enter the text to analyze"
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
