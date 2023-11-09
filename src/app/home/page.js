"use client";
import BottomNavigation from "@/components/Common/BottomNavigation";
import MainContent from "@/components/home/MainContent";
import TopNavigation from "@/components/home/TopNavigation";

const Home = () => {
  return (
    <>
      <TopNavigation />
      <MainContent />
      <BottomNavigation />
    </>
  );
};

export default Home;
