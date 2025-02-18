import React, { useEffect, useState } from "react";
import {
  getClothesData,
  getWordsData,
  setClothesImage,
  setWordsImage,
} from "../data/api";

const UploadeImages = () => {
  const [wordData, setWordSata] = useState([]);
  const [clothesData, setClothesData] = useState([]);
  const [newData, setNewData] = useState({
    id: "",
    image: "",
  });

  const [newClothesData, setNewClothesData] = useState({
    id: "",
    image: "",
  });

  useEffect(() => {
    getWordsData().then((data) => {
      setWordSata(data.words);
    });
    getClothesData().then((data) => {
      setClothesData(data.clothes);
    });
  }, []);

  const uploadImage = async (e) => {
    e.preventDefault();
    return setWordsImage(newData);
  };

  const uploadClothesImage = async (e) => {
    e.preventDefault();
    return setClothesImage(newClothesData);
  };

  return (
    <div className="container">
      <form action="/stats" enctype="multipart/form-data" method="post">
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => {
              setNewData((prev) => ({ ...prev, image: e.target.files[0] }));
            }}
            name="image"
          />
          <select
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, id: e.target.value }))
            }
          >
            {wordData?.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.word}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" onClick={uploadImage}>
          Upload
        </button>
      </form>
      <hr />
      <form action="/stats" enctype="multipart/form-data" method="post">
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => {
              setNewClothesData((prev) => ({
                ...prev,
                image: e.target.files[0],
              }));
            }}
            name="image"
          />
          <select
            onChange={(e) =>
              setNewClothesData((prev) => ({ ...prev, id: e.target.value }))
            }
          >
            {clothesData?.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.clothing_item}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" onClick={uploadClothesImage}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadeImages;
