import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Residence from "./pages/Residence";
import Error from "./pages/Error";
import About from "./pages/About";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/residence/:id" element = {<Residence />} />
        <Route path="/error" element = {<Error />} />
        <Route path="/about" element = {<About />} />
        <Route path="*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
