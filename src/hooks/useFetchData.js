import axios from "@/api/axios";
import request from "@/api/request";
import { useState, useEffect } from "react";
export const useFetchData = (type) => {
  const [imageUrlList, setImageUrlList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(request[type]);
        const paths = res.data.results.map((value) => value.backdrop_path);
        setImageUrlList(paths);
      } catch (err) {
        console.log(err);
        setImageUrlList([]);
      }
    };

    fetchData();
  }, []);

  return imageUrlList;
};
