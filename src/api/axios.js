import axios from "axios";
// axios 인스턴스 생성
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { language: "ko-KR" },
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

export default instance;
