"use client";
import styled from "styled-components";
import dynamic from "next/dynamic";
export default function App() {
  const NetflixLottie = dynamic(
    () => import("@/components/Lottie/NetflixLottie"),
    {
      ssr: false,
    }
  );
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
