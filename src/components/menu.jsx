import React, { createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Spring from "../pages/spring.jsx";
import Winter from "../pages/winter.jsx";
import Summer from "../pages/summer.jsx";
import Autumn from "../pages/autumn.jsx";
import woorden from "../data/woorden.json";

export const Context = createContext();
const Menu = () => {
  const [data, setData] = useState([woorden]);

  return (
    <Context.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lente" element={<Spring />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/zomer" element={<Summer />} />
        <Route path="/herfst" element={<Autumn />} />
      </Routes>
    </Context.Provider>
  );
};

export default Menu;
