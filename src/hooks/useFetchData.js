import axios from "@/api/axios";
import request from "@/api/request";
export const useFetchData = async (type) => {
  try {
    const res = await axios.get(request[type]);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const useFectDetailData = async (id) => {
  try {
    const data = await axios.get(`${request[movieDetail]}/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
