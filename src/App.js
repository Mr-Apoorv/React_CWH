import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const removeClass = () => {
    document.body.classList.remove(`bg-primary`);
    document.body.classList.remove(`bg-danger`);
    document.body.classList.remove(`bg-success`);
    document.body.classList.remove(`bg-warning`);
    document.body.classList.remove(`bg-dark`);
    document.body.classList.remove(`bg-light`);
  };

  const toggleMode = (color) => {
    removeClass();
    console.log(color);
    document.body.classList.add(`bg-${color}`);

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
    <Router>
      <Navbar
        title="Text Utils"
        about="TextUtils About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForm
              heading="Try Text Util - Word counter | Character counter | lowercase to uppercase |
              uppercase to lowercase"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
