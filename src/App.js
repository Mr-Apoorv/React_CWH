import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode active", "success");
      document.title = "TextUtils - Dark mode";

      // setInterval(() => {
      //   document.title = "TextUtils - Awesome mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Download it";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode active", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        about="TextUtils About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About mode={mode} /> */}

        <TextForm
          heading="Enter the text below to analyze"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
