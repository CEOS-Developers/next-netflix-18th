"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import tmdbApi, { requests } from "@/components/api";
import NavBar from "@/components/navbar";
import SearchBar from "./searchBar";
import { includesChosung } from "../utils/searchChosung";
import { renderMovieLists } from "../utils/movieFunctions";

import styled from "styled-components";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

function Search() {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  //검색창 X 누르면
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    if (searchQuery === "") {
      setTopRated([]);
      setCurrentPage(1);
      setHasMore(true);
      fetchMoviesFromPage(1).then((newMovies) => {
        setTopRated(newMovies);
      });
    }
  }, [searchQuery]);

  useEffect(() => {
    setFilteredMovies(
      searchQuery
        ? topRated.filter((movie: { id: number; title: string }) =>
            includesChosung(movie.title, searchQuery),
          )
        : topRated,
    );
  }, [topRated, searchQuery]);

  //현재 페이지 변경-> 영화 데이터 불러옴
  useEffect(() => {
    if (currentPage > 1 && hasMore)
      fetchMoviesFromPage(currentPage).then((newMovies) => {
        setTopRated((prevMovies) => [...prevMovies, ...newMovies]);
      });
  }, [currentPage]);

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

  // useEffect(() => {
  //   if (isLoading && hasMore)
  //     fetchMoviesFromPage(currentPage).then((newMovies) => {
  //       setTopRated((prevMovies) => [...prevMovies, ...newMovies]);
  //     });
  //   else if (!hasMore) setIsLoading(false);
  // }, [isLoading]);

  const lastMovieElementRef = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading],
  );

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsLoading(true);
      }
    };
    setIsLoading(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <SearchContainer className="flex flex-col items-center w-full mb-[1.44rem]">
        <div>
          {filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              ref={
                filteredMovies.length === index + 1
                  ? lastMovieElementRef
                  : undefined
              }
            >
              {/* {renderMovieLists(filteredMovies)} */}
              {renderMovieLists([movie])}
            </div>
          ))}
        </div>
      </SearchContainer>
      <NavBar />
    </div>
  );
}

export default Search;

const SearchContainer = styled.div`
  overflow: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
