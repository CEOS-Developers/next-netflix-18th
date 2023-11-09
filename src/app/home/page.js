"use client";
import BottomNavigation from "@/components/Common/BottomNavigation";
import MainContent from "@/components/home/MainContent";
import PreviewSection from "@/components/home/PreviewSection";
import TopNavigation from "@/components/home/TopNavigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPopularData } from "@/api/fetchData";
import RecommendSection from "@/components/home/RecommendSection";
const Home = () => {
  const [popularSrc, setPopularSrc] = useState([]);
  useEffect(() => {
    const fetchSrc = async () => {
      const paths = await fetchPopularData();
      setPopularSrc(paths);
    };
    fetchSrc();
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
        {/* <RecommendSection title={"Continue watching for Inyoung"} />
        <RecommendSection title={"Continue watching for Inyoung"} /> */}
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
