import "./App.css";
import Navbar from "./comoponents/Navbar";
import Textform from "./comoponents/Textform";
import React, { useState } from "react";
import Alert from "./comoponents/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [red, setred] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showalert("Dark mode is set", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is set", "success");
    }
  };

  const redcolor = () => {
    if (red === "light") {
      setred("red");
      document.body.style.backgroundColor = "#8b0000";
      showalert("beast mode is set", "success");
    } else {
      setred("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        abouttext="About"
        mode={mode}
        toggle={toggle}
        redcolor={redcolor}
      />

      <Alert alert={alert} />
      <div className="container">
        <Textform
          showalert={showalert}
          heading="Enter your text to Analyse below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
