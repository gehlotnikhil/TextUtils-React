import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import Nav from './component/Nav'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);

    // setInterval(() => {
    //   setAlert(null);
    // }, 2000);
  };
  const removeBackground = ()=>
  {
    console.log("Yes");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-white");
    document.body.classList.remove("bg-primary");
  }
  const clickToggle = (cls) => {
    removeBackground();
    document.body.classList.add('bg-'+cls);
    if (cls === "dark") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert(" Toggle Mode has been Enabled", "success");
    }
    else {
      setmode("light");
      // document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Toggle Mode has been Enabled", "success");
    }
  };
  const toggleBlue = (cls) => {

    if (mode === "light") {
      setmode("blue");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      showAlert("Blue Mode has been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Blue Mode has been Disabled", "success");
    }
  };
  return (
    <>
      <Router basename="/TextUtils-React">
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleBlue={toggleBlue}
          toggle={clickToggle}
        />
        {/* <TextForm mode={mode} showAlert={showAlert} /> */}
        <Alert alert={alert} />
        <Routes >
          <Route
            exact
            path="/"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
