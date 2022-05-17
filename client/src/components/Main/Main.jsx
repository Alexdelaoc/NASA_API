import React from "react";
import Welcome from "./Welcome/Welcome";
import Landings from "./Landings/Landings";
import Neas from "./Neas/Neas"
import Cart from "./Cart/Cart";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route element={<Welcome />} path="/"/>
        <Route element={<Landings />} path="/landings"/>
        <Route element={<Neas />} path="/neas"/>
        <Route element={<Cart />} path="/cart"/>
      </Routes>
    </main>
  )
}

export default Main