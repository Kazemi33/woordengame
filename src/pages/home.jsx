import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/menu";
import charachter1 from "../assets/character1.png";
import charachter2 from "../assets/character2.png";
import { useParams } from "react-router-dom";

//  https://stackoverflow.com/questions/67248505/how-do-i-make-an-image-move-on-keys-up-down-left-right

const Home = () => {
  const season = window.location.pathname.split("/")[1];

  const { wordsdata, clothesdata } = useContext(Context);

  const [selectedMenu, setSelectedMenu] = useState("words");

  const selectMenuHandler = (e) => {
    return setSelectedMenu(e);
  };

  //character moving
  // const [position, setPosition] = useState({ x: 300, y: 90 });

  const image = document.querySelector(".image-continer");

  // document.addEventListener("keydown", (e) => {
  //   if (!image) return;
  //   const cs = getComputedStyle(image);

  //   const change = 10;
  //   const regex = /[\d\.]*/;

  //   const left = cs.left;
  //   const top = cs.top;
  //   const leftNumber = left.match(regex);
  //   const topNumber = top.match(regex);

  //   if (e.key === 37) {
  //     image.style.left = `${parseFloat(leftNumber[0]) - change}px`;
  //   }
  //   // TOP key pressed
  //   if (e.key === 38) {
  //     image.style.top = `${parseFloat(topNumber[0]) - change}px`;
  //   }
  //   // RIGHT key pressed
  //   if (e.key === 39) {
  //     image.style.left = `${parseFloat(leftNumber[0]) + change}px`;
  //   }
  //   // DOWN key pressed
  //   if (e.key === 40) {
  //     image.style.top = `${parseFloat(topNumber[0]) + change}px`;
  //   }
  // });
  // const style = {
  //   width: "50px",
  //   position: "absolute",
  //   marginLeft: `${position.x}px`,
  //   marginTop: `${position.y}px`,
  // };

  const x = 0;
  const y = 0;
  const keys = {};
  image.style.left = x + "px";
  image.style.top = y + "px";

  document.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
  });
  document.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;

    if (keys[37]) {
      x += 5;
      image.style.left = x + "px";
    }

    if (keys[39]) {
      x -= 5;
      image.style.left = x + "px";
    }
  });

  return (
    <div className={`container-${season}`}>
      <nav>
        <ol>
          <li onClick={() => selectMenuHandler("clothes")} key={1}>
            1- Kleding
          </li>
          <li onClick={() => selectMenuHandler("words")} key={2}>
            2- Woorden
          </li>
        </ol>
      </nav>

      <div className={`container-${season}-content`}>
        <div className="image-continer">
          hu
          {/* <img src={charachter1} alt="character" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
