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
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const PrevewTitle = styled.div`
  padding-left: 16px;
  color: #fff;
  font-family: SF Pro Display;
  font-size: 26.748px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.073px;
`;
const PreviewListContainer = styled.div`
  margin-left: 12px;
  overflow: scroll;
`;

const PreviewList = styled.div`
  display: flex;
  gap: 7px;
  width: 1050px;
  overflow: scroll;
`;

const PreviewItem = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: gray;
`;

export default PreviewSection;
