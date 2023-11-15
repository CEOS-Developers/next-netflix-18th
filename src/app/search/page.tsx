"use client";

import React from "react";
import NavBar from "@/components/navbar";
import SearchBar from "./searchBar";

type Props = {};

function Search({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar />
      <h3 className="pl-[0.25rem] text-white text-preview font-bold">
        Top Searches
      </h3>

      <NavBar />
    </div>
  );
}

export default Search;
