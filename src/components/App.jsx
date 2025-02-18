import { Link, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

import Menu, { Context } from "./menu";

function App() {
  const { setSelectedSeason, seasonsdata } = useContext(Context);

  return (
    <div className="App">
      <div className="container-main">
        <h1>Seizoenen</h1>
        {seasonsdata.map((season) => (
          <Link
            onClick={() => setSelectedSeason(season.name)}
            key={season.id}
            className={`menu-btn ${season.name}`}
            to={`/${season.name}`}
          ></Link>
        ))}
      </div>
    </div>
  );
}

export default App;
