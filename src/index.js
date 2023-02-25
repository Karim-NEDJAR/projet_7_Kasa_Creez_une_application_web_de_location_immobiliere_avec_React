import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* <Routes>
        <Route exact path="/" element=""> */}
      <Home />
      {/* </Route>
        <Route path="/about"> */}
      <About />
      {/* </Route>
        <Route path="*"> */}
      <Error />
      {/* </Route>
      </Routes> */}
      <Footer />
    </Router>
  </React.StrictMode>
);
