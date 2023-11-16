"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import tmdbApi, { requests } from "@/components/api";
import NavBar from "@/components/navbar";
import SearchBar from "./searchBar";
import { includesChosung } from "../utils/searchChosung";
import { renderMovieLists } from "../utils/movieFunctions";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

function Search() {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  //검색창 X 누르면
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // 특정 페이지의 영화 데이터를 가져오는 함수
  const fetchMoviesFromPage = async (page: number) => {
    setIsLoading(true);
    const response = await tmdbApi.get<{
      results: Movie[];
      total_pages: number;
    }>(requests.fetchTopRated, {
      params: { page },
    });
    setIsLoading(false);
    setHasMore(page < response.data.total_pages);
    return response.data.results;
  };

  const lastMovieElementRef = useCallback(
    (node: Element | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  //현재 페이지 변경-> 영화 데이터 불러옴
  useEffect(() => {
    fetchMoviesFromPage(currentPage).then((newMovies) => {
      setTopRated((prevMovies) => [...prevMovies, ...newMovies]);
    });
  }, [currentPage]);

  // 검색애 따라 -> 전체 영화 목록에서 필터링
  const filteredMovies = searchQuery
    ? topRated.filter((movie) => includesChosung(movie.title, searchQuery))
    : topRated;

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />

      <h3 className="pl-[0.63rem] pt-[117px] text-start text-white text-preview font-bold mb-[1.3rem] w-[375px]">
        Top Searches
      </h3>

      <div className="flex flex-col items-center justify-center w-full pb-[60px] overflow-y-auto">
        {filteredMovies.map((movie, index) => (
          <div
            key={movie.id}
            ref={
              filteredMovies.length === index + 1
                ? lastMovieElementRef
                : undefined
            }
          >
            {renderMovieLists(filteredMovies)}
            {/* {renderMovieLists([movie])} */}
          </div>
        ))}
      </div>

      <NavBar />
    </div>
  );
}

export default Search;
