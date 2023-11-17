"use client";
import { TopSearch } from "@/components/search/TopSearch";
import { useState, useEffect } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { SearchInput } from "@/components/search/SearchInput";
export default function Search() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterdData, setFilterdData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await useFetchData("movieTopRated");
      setData(fetchedData);
      setFilterdData(fetchedData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const filterData = async () => {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilterdData(filteredData);
      console.log(filteredData);
    };
    filterData();
  }, [input]); // data 추가
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div style={{ overflowX: "auto" }}>
      <SearchInput input={input} setInput={setInput} />
      <TopSearch data={filterdData} imageUrl={imageUrl} />
    </div>
  );
}
