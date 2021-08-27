import { axios } from "axios-hook";
const url = "http://localhost:4000/data";

export const getTokenData = async () => {
  const { data, status } = await axios.get(url, {
    headers: {
      "content-type": "application/json",
    },
  });
  if (data) return data;
  return;
};
