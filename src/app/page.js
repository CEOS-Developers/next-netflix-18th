"use client";
import NetflixLottie from "@/components/Lottie/NetflixLottie";
import styled from "styled-components";
export default function App() {
  return (
    <LandingWrapper>
      <NetflixLottie />
    </LandingWrapper>
  );
}
const LandingWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
