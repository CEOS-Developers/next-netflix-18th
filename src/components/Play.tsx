"use client";
import styled from "styled-components";
import { MainPlayIcon } from "../../public/svgs";

export const PlayButton = () => {
  return (
    <Button>
      <MainPlayIcon className="mr-[0.94rem]" />
      <ButtonText>Play</ButtonText>
    </Button>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 303px;
  height: 45px;
  display: flex;
  border-radius: 5.625px;
  margin-top: 0.81rem;
  background-color: #c4c4c4;
  &:hover {
    background-color: #a3a3a3;
  }
`;

const ButtonText = styled.span`
  color: #000000;
  text-align: center;
  font-size: 1.27rem;
  line-height: 146.61%;
`;
