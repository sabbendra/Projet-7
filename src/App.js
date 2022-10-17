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
        {/* c'est un chemin dynamique */}
        <Route path='/Residence/:id' element = {<Residence />} />
        {/* Quand je créé le chemin pour aller a error et je montre les éléments de la page Error */}
        {/* c'est un chemin absolu */}
        <Route path='/Error' element = {<Error />} />
        <Route path='/About' element = {<About />} />
        <Route path='*' element = {<Error />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
    </>
  );
};

export default App;
