import React from "react";
import styled from "styled-components";
function PreviewSection() {
  return (
    <PreviewSectionWrapper>
      <PrevewTitle>Previews</PrevewTitle>
      <PreviewListContainer>
        <PreviewList>
          <PreviewItem />
          <PreviewItem />
          <PreviewItem />
          <PreviewItem />
          <PreviewItem />
        </PreviewList>
      </PreviewListContainer>
    </PreviewSectionWrapper>
  );
}

const PreviewSectionWrapper = styled.section`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const PrevewTitle = styled.div`
  padding-left: 20px;
  color: #fff;
  font-family: SF Pro Display;
  font-size: 26.748px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.073px;
`;
const PreviewListContainer = styled.div`
  overflow: scroll;
  width: 100%;
`;

const PreviewList = styled.div`
  display: flex;
  gap: 7px;
`;

const PreviewItem = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  backgrund-color: gray;
`;

export default PreviewSection;
