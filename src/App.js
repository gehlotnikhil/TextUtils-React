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
   
      setTimeout(() => {
        setAlert(null);
      }, 3000);

    // setInterval(() => {
    //   setAlert(null);
    // }, 2000);
  }
  const clickToggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Light Mode has been Enabled","success");
      document.title = "TextUtils - Dark Mode";
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been Disabled","success");
      document.title = "TextUtils - Light Mode";

    }
  };
  const toggleBlue = () => {
    if (mode === "light") {
      setmode("blue");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      showAlert("Blue Mode has been Enabled","success");
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Blue Mode has been Disabled","success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleBlue = {toggleBlue} toggle={clickToggle} />
      <Alert alert = {alert}/>
      {/* <About /> */}
      <TextForm mode={mode}  showAlert = {showAlert} />
      
    </> 
  );
}

export default App;
