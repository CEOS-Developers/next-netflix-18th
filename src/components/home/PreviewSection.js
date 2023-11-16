import React from "react";
import styled from "styled-components";
import { useFetchData } from "@/hooks/useFetchData";
import Link from "next/link";
export async function PreviewSection() {
  const previewDataList = await useFetchData("movieUpcoming");
  return (
    <PreviewSectionWrapper>
      <PrevewTitle>Previews</PrevewTitle>
      <PreviewListContainer>
        <PreviewList>
          {previewDataList.slice(0, 10).map((item) => {
            return (
              <Link href={`/home/${item.id}`} key={item.id}>
                <PreviewItem
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                />
              </Link>
            );
          })}
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

const PreviewItem = styled.img`
  width: 102px;
  height: 102px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;
