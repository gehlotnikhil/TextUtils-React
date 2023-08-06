import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
// import TextForm from './component/TextForm';
// import Nav from './component/Nav'
import { useState } from "react";

function App() {
  const [mode, setmode] = useState('light');
  const clickToggle = () => {
    if (mode === 'light')
     setmode('dark');
    else setmode('light');
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={clickToggle} />
      <About />
    </>
  );
}

export default App;
