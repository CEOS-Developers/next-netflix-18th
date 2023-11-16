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

export const useFetchDetailData = async (id) => {
  try {
    const res = await axios.get(`${request.movieDetail}/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
