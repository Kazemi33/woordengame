import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/menu";
import charachter1 from "../assets/character1.png";
import charachter2 from "../assets/character2.png";
const Spring = () => {
  const { data } = useContext(Context);
  const springData = Object.values(data[0]).map((item) => item);
  const [selectedMenu, setSelectedMenu] = useState("woorden");
  // useEffect(() => {}, [selectedMenu]);
  const selectMenuHandler = (e) => {
    return setSelectedMenu(e);
  };

  //character moving
  const [position, setPosition] = useState({ x: 300, y: 90 });
  const MyCharacter = () => {
    const movementCharacter = (e) => {
      console.log("test", e);
      document.addEventListener("keydown", (e) => {
        console.log(e.key);

        if (e.key === "ArrowRight") {
          setPosition((p) => ({ ...p, x: x + 10 }));
        } else if (e.key === "ArrowLeft") {
          setPosition((p) => ({ ...p, x: x - 10 }));
        } else if (e.key === "ArrowUp") {
          setPosition((p) => ({ ...p, y: y - 10 }));
        } else if (e.key === "ArrowDown") {
          setPosition((p) => ({ ...p, y: y + 10 }));
        }
      });
    };

    const style = {
      width: "50px",
      marginLeft: `${position.x}px`,
      marginTop: `${position.y}px`,
    };
    return (
      <img
        onKeyDown={(e) => {
          movementCharacter(e);
        }}
        style={style}
        src={charachter1}
        alt="character"
      />
    );
  };
  useEffect(() => {
    // movementCharacter();
  }, [position]);
  console.log(position);
  return (
    <div className="container-spring">
      <nav>
        <ol>
          {Object.keys(data[0].lente).map((item, index) => (
            <li onClick={() => selectMenuHandler(item)} key={index}>
              {index + 1}- {item}
            </li>
          ))}
        </ol>
      </nav>

      {/* {springData.map((item, index) => {
        return (
          <ul>
            {item[selectedMenu].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        );
      })} */}

      <div className="container-spring-content">{<MyCharacter />}</div>
    </div>
  );
};

export default Spring;
