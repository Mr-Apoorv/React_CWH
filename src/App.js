import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
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
      <div className="container my-3">
        <About mode={mode} />

        <TextForm heading="Enter the text below to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
