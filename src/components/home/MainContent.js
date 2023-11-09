import React from "react";
import styled from "styled-components";
import MyListLogo from "public/assets/images/icon/my-list.svg";
import PlayLogo from "public/assets/images/icon/play.svg";
import InfoLogo from "public/assets/images/icon/info.svg";
function MainContent() {
  return (
    <MainSection>
      <RandomImageBox>
        <ImageCaption>#2 in Nigeria Today</ImageCaption>
      </RandomImageBox>
      <ButtonWrapper>
        <MyListButton>
          <MyListLogo />
          <MyListText>My List</MyListText>
        </MyListButton>
        <PlayButton>
          <PlayLogo />
          <PlayText>Play</PlayText>
        </PlayButton>
        <InfoButton>
          <InfoLogo />
          <InfoText>Info</InfoText>
        </InfoButton>
      </ButtonWrapper>
    </MainSection>
  );
}
const MainSection = styled.section``;

const RandomImageBox = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0) 87.26%,
      #000 100%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;

  height: 415px;
  position: relative;
`;

const ImageCaption = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0px;
  color: #fff;
  font-size: 13.723px;
  font-weight: 700;
  line-height: 20px; /* 145.741% */
  letter-spacing: -0.041px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 42px;
  margin-top: 11px;
`;

const MyListButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  cursor: pointer;
`;

const MyListText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 13.642px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.041px;
`;

const InfoButton = styled(MyListButton)``;

const InfoText = styled(MyListText)``;

const PlayButton = styled.div`
  width: 110.625px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 5.625px;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

const PlayText = styled.div`
  color: #000;
  text-align: center;
  font-size: 20.462px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 146.61% */
  letter-spacing: -0.061px;
`;

export default MainContent;
