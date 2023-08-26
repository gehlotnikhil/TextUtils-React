import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import Nav from './component/Nav'
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const clickToggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey"
      document.body.style.color = "white"
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={clickToggle} />
      {/* <About /> */}
      <TextForm mode={mode}  />
    </>
  );
}

export default App;
