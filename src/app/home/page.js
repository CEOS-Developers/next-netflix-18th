"use client";
import BottomNavigation from "@/components/Common/BottomNavigation";
import {
  MainContent,
  PreviewSection,
  TopNavigation,
  RecommendSection,
} from "@/components/home";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  fetchActionData,
  fetchPopularData,
  fetchTopRatedData,
} from "@/api/fetchData";

const Home = () => {
  //여기 useState랑 Effect 사용하지 않아도 될듯함
  const [popularSrc, setPopularSrc] = useState([]);
  const [topRatedSrc, setTopRatedSrc] = useState([]);
  const [actionSrc, setActionSrc] = useState([]);
  useEffect(() => {
    const fetchPopularSrc = async () => {
      const paths = await fetchPopularData();
      setPopularSrc(paths);
    };
    const fetchTopRatedSrc = async () => {
      const paths = await fetchTopRatedData();
      setTopRatedSrc(paths);
    };
    const fetchActionSrc = async () => {
      const paths = await fetchActionData();
      setActionSrc(paths);
    };
    fetchPopularSrc();
    fetchTopRatedSrc();
    fetchActionSrc();
  }, []);
  return (
    <>
      <ScrollContainer>
        <TopNavigation />
        <MainContent />
        <PreviewSection />
        <RecommendSection
          title={"Popular on Netflix"}
          recommendSrc={popularSrc}
        />
        <RecommendSection title={"Trending Now"} recommendSrc={topRatedSrc} />
        <RecommendSection title={"Action Movies"} recommendSrc={actionSrc} />
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
