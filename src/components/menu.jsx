import React, { createContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Spring from "../pages/spring.jsx";
import Winter from "../pages/winter.jsx";
import Summer from "../pages/summer.jsx";
import Autumn from "../pages/autumn.jsx";
import UploadeImages from "./uploadeImages.jsx";
import { getClothesData, getWordsData, getSeasonsData } from "../data/api.jsx";
import Home from "../pages/home.jsx";

export const Context = createContext();
const Menu = () => {
  const [wordsdata, setWordsData] = useState([]);
  const [clothesdata, setClothesData] = useState([]);
  const [seasonsdata, setSeasonsData] = useState([]);

  const [selectedSeason, setSelectedSeason] = useState("lente");

  useEffect(() => {
    getWordsData().then((data) => {
      setWordsData(data.words);
    });
    getClothesData().then((data) => {
      setClothesData(data.clothes);
    });
    getSeasonsData().then((data) => {
      setSeasonsData(data.seasons);
    });
  }, []);

  const value = {
    wordsdata,
    clothesdata,
    seasonsdata,
    setSelectedSeason,
  };

  //   const setProps = (e) => {
  //     setSelectedSeason(e);
  //   };

  //   if (!wordsdata || !clothesdata || !seasonsdata) {
  //     return <div>Loading...</div>;
  // }

  return (
    <Context.Provider value={value}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={`/${selectedSeason}`} element={<Home />} />

        {/* <Route path="/lente" element={<Spring />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/zomer" element={<Summer />} />
        <Route path="/herfst" element={<Autumn />} /> */}
        <Route path="/upload" element={<UploadeImages />} />
      </Routes>
    </Context.Provider>
  );
};

export default Menu;
