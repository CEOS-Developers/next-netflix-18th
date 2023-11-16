"use client";
import {
  MainContent,
  PreviewSection,
  TopNavigation,
  RecommendSection,
} from "@/components/home";
import styled from "styled-components";
const Home = () => {
  return (
    <>
      <ScrollContainer>
        <TopNavigation />
        <MainContent />
        <PreviewSection />
        <RecommendSection title={"Popular on Netflix"} type="moviePopular" />
        <RecommendSection title={"Trending Now"} type="movieTopRated" />
        <RecommendSection title={"Action Movies"} type="movieAction" />
        <ScrollMarginSpace />
      </ScrollContainer>
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
