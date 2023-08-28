import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import Nav from './component/Nav'
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert(
      {
        msg: message,
        type: type
      }
    );
  }
  const clickToggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Light Mode has been Enabled","success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been Enabled","success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={clickToggle} />
      <Alert alert = {alert}/>
      {/* <About /> */}
      <TextForm mode={mode}  />
      
    </>
  );
}

export default App;
