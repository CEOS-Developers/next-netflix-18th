import axios from "@/api/axios";
import request from "@/api/request";

export const fetchPopularData = async () => {
  try {
    const res = await axios.get(request.fetchMoviePopular);
    const paths = res.data.results.map((value) => value.backdrop_path);
    return paths;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchTopRatedData = async () => {
  try {
    const res = await axios.get(request.fetchMovieTopRated);
    const paths = res.data.results.map((value) => value.backdrop_path);
    return paths;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchActionData = async () => {
  try {
    const res = await axios.get(request.fetchActionMovies);
    const paths = res.data.results.map((value) => value.backdrop_path);
    return paths;
  } catch (err) {
    console.log(err);
    return [];
  }
};
