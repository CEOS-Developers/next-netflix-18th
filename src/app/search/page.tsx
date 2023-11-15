"use client";

import React, { useEffect, useState } from "react";
import tmdbApi, { requests } from "@/components/api";
import NavBar from "@/components/navbar";
import SearchBar from "./searchBar";
import { renderMovieLists } from "../utils/movieFunctions";
import { includesChosung } from "../utils/searchChosung";
type Props = {};
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

function Search({}: Props) {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = topRated.filter((movie) =>
    includesChosung(movie.title, searchQuery),
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [topRatedData] = await Promise.all([
          tmdbApi.get(requests.fetchTopRated),
        ]);
        setTopRated(topRatedData.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <h3 className="pl-[0.63rem] pt-[117px] text-start text-white text-preview font-bold mb-[1.3rem] w-[375px]">
        Top Searches
      </h3>

      <div className="flex flex-col items-center justify-center w-full pb-[60px] overflow-y-auto">
        {renderMovieLists(filteredMovies)}
      </div>
      <NavBar />
    </div>
  );
}

export default Search;
