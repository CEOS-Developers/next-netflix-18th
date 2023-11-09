"use client";
import BottomNavigation from "@/components/Common/BottomNavigation";
import MainContent from "@/components/home/MainContent";
import PreviewSection from "@/components/home/PreviewSection";
import RecommendSection from "@/components/home/RecommendSection";
import TopNavigation from "@/components/home/TopNavigation";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "@/api/axios";
import request from "@/api/request";
const Home = () => {
  const fetchData = async () => {
    try {
      const res = axios.get(request.fetchMovieNowPlaying);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ScrollContainer>
        <TopNavigation />
        <MainContent />
        <PreviewSection />
        <RecommendSection title={"Continue watching for Inyoung"} />
        <RecommendSection title={"Continue watching for Inyoung"} />
        <RecommendSection title={"Continue watching for Inyoung"} />
        <ScrollMarginSpace />
      </ScrollContainer>
      <BottomNavigation />
    </>
  );
};

const ScrollContainer = styled.div`
  height: calc(100vh - 80px);
  position: relative;
  overflow: scroll;
`;

const ScrollMarginSpace = styled.div`
  height: 20px;
`;

export default Home;
