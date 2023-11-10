import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "@/api/request";
import axios from "@/api/axios";
import { useFetchUpcomingData } from "@/hooks/useFetchData";
export function PreviewSection() {
  const previewImageUrl = useFetchUpcomingData("fetchMovieNowPlaying");
  return (
    <PreviewSectionWrapper>
      <PrevewTitle>Previews</PrevewTitle>
      <PreviewListContainer>
        <PreviewList>
          {previewImageUrl.slice(0, 10).map((src) => {
            return (
              <>
                <PreviewItem
                  src={"https://image.tmdb.org/t/p/original" + src}
                />
              </>
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
`;
