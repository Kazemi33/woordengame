import { Link, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

import Menu, { Context } from "./menu";

function App() {
  const setPath = useContext(Context);

  return (
    <div className="App">
      <div className="container-main">
        <h1>Seizoenen</h1>
        <Link
          onClick={() => setPath.setProps("lente")}
          className="menu-btn lente"
          to={"/lente"}
        ></Link>
        <Link
          onClick={() => setPath.setProps("zomer")}
          className="menu-btn zomer"
          to={"/zomer"}
        ></Link>
        <Link
          onClick={() => setPath.setProps("herfst")}
          className="menu-btn herfst"
          to={"/herfst"}
        ></Link>
        <Link
          onClick={() => setPath.setProps("winter")}
          className="menu-btn winter"
          to={"/winter"}
        ></Link>
      </div>
    </div>
  );
}

export default App;
