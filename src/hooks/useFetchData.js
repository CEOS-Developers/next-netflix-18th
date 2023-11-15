import axios from "@/api/axios";
import request from "@/api/request";
export const useFetchData = async (type) => {
  try {
    const res = await axios.get(request[type]);
    const paths = res.data.results.map((value) => value.backdrop_path);
    return paths;
  } catch (err) {
    console.log(err);
  }
};
