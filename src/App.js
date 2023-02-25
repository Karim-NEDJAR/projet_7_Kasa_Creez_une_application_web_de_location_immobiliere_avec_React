import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Card from "./pages/Card";
import About from "./pages/About";
import "./style/style.css";

export default function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route exact path="/" element=""> */}
      <Home />
      {/* </Route>
      <Route exact path="/" element=""> */}
      <Card />
      {/* </Route>
        <Route path="/about"> */}
      <About />
      {/* </Route>
        <Route path="*"> */}
      <Error />
      {/* </Route>
      </Routes> */}
      <Footer />
    </>
  );
}
