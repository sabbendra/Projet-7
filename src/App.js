import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Residence from "./pages/Residence";
import Error from "./pages/Error";
import About from "./pages/About";


function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    
      <Routes>
        <Route index element = {<Home />} />
        <Route path='/residence/:id' element = {<Residence />} />
        <Route path='/error' element = {<Error />} />
        <Route path='/about' element = {<About />} />
        <Route path='*' element = {<Error />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
    </>
  );
};

export default App;
