import React from "react";
import styled from "styled-components";
function RecommendSection({ title }) {
  return (
    <RecommendSectionWrapper>
      <RecommendTitle>{title}</RecommendTitle>
      <RecmommendListContainer>
        <RecommendList>
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
        </RecommendList>
      </RecmommendListContainer>
    </RecommendSectionWrapper>
  );
}

const RecommendSectionWrapper = styled.section`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const RecommendTitle = styled.div`
  padding-left: 16px;
  color: #fff;
  font-size: 20.921px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.643px;
  letter-spacing: -0.057px;
`;

const RecmommendListContainer = styled.div`
  margin-left: 12px;
  overflow: scroll;
`;

const RecommendList = styled.div`
  display: flex;
  gap: 7px;
  width: 1050px;
  overflow: scroll;
`;

const RecommendItem = styled.div`
  width: 103px;
  height: 161px;
  border-radius: 2px;
  
`;

export default RecommendSection;
