import Lottie from "react-lottie-player";
import styled from "styled-components";
import lottieJson from "../../../public/assets/images/netflixLottie.json";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const NetflixLottie = () => {
  //애니메이션 후 홈으로 navigate
  const router = useRouter();
  useEffect(() => {
    const landing = setTimeout(() => {
      router.push("/home");
    }, 3800);

    // 컴포넌트 언마운트 시 타임아웃 클리어
    return () => clearTimeout(landing);
  }, []);
  return (
    <LottieWrapper>
      <Lottie loop animationData={lottieJson} play style={{ width: "500px" }} />
    </LottieWrapper>
  );
};

export default NetflixLottie;
const LottieWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
