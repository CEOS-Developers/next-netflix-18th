import styled from "styled-components";

function RecommendSection({ title, recommendSrc }) {
  return (
    <RecommendSectionWrapper>
      <RecommendTitle>{title}</RecommendTitle>
      <RecommendListContainer>
        <RecommendList>
          {recommendSrc.slice(0, 10).map((src) => {
            return (
              <>
                <RecommendItem
                  src={"https://image.tmdb.org/t/p/original" + src}
                />
              </>
            );
          })}
        </RecommendList>
      </RecommendListContainer>
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

const RecommendListContainer = styled.div`
  margin-left: 12px;
  overflow: scroll;
`;

const RecommendList = styled.div`
  display: flex;
  gap: 7px;
  width: 1050px;
  overflow: scroll;
`;

const RecommendItem = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
  object-fit: cover;
`;

export default RecommendSection;
