import axios from "axios";

const baseUrl = "http://localhost:5000";
//seasons
export const getSeasonsData = async () => {
  const result = await axios.get(`${baseUrl}/seasons`);

  return result.data;
};

//words
export const getWordsData = async () => {
  const result = await axios.get(`${baseUrl}/words`);

  return result.data;
};

export const setWordsImage = async (data) => {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("id", data.id);

  const result = await axios.post(`${baseUrl}/words/:${data.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Application: "application/json",
    },
  });

  return result.data;
};

// clothes

export const getClothesData = async () => {
  const result = await axios.get(`${baseUrl}/clothes`);

  return result.data;
};

export const setClothesImage = async (data) => {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("id", data.id);

  const result = await axios.post(`${baseUrl}/clothes/:${data.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Application: "application/json",
    },
  });

  return result.data;
};
