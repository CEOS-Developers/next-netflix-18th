import styled from "styled-components";

function PopularSection({ title, popularSrc }) {
  return (
    <PopularSectionWrapper>
      <PopularTitle>{title}</PopularTitle>
      <PopularListContainer>
        <PopularList>
          {popularSrc.slice(0, 10).map((src) => {
            return (
              <>
                <PopularItem
                  src={"https://image.tmdb.org/t/p/original" + src}
                />
              </>
            );
          })}
        </PopularList>
      </PopularListContainer>
    </PopularSectionWrapper>
  );
}

const PopularSectionWrapper = styled.section`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const PopularTitle = styled.div`
  padding-left: 16px;
  color: #fff;
  font-size: 20.921px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.643px;
  letter-spacing: -0.057px;
`;

const PopularListContainer = styled.div`
  margin-left: 12px;
  overflow: scroll;
`;

const PopularList = styled.div`
  display: flex;
  gap: 7px;
  width: 1050px;
  overflow: scroll;
`;

const PopularItem = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;
  object-fit: cover;
`;

export default PopularSection;
