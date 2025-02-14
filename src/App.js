// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-white");
    document.body.classList.remove("bg-black");
    document.body.classList.remove("bg-secondary");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#4c4040";
      showAlert('success', 'Theme Changed');
    } else if (cls === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('success', 'Theme Changed');
    } else {
      document.body.classList.add("bg-" + cls);
      showAlert('success', 'Theme Changed');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
