import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Lists>
        <Title>
          그럼 너는
          <a href="https://store.naver.com/restaurants/detail?entry=plt&id=13390151&query=%EA%B0%80%EB%AF%B8%EC%9A%B0%EB%8F%99">
            가미우동
          </a>
          (이)야!
        </Title>
        <img
          src="https://blogthumb.pstatic.net/MjAyMDAxMDZfMzgg/MDAxNTc4MjY4NzUwNTM5.pgnU9d3ZbUKJZCstSFXha0mzwtcm6NgbvkvQCRzMBSsg.bD2Pl_veGCLnAyCnAxtTY-dlBLGxQKC-ce-ZD6A1Lgcg.JPEG.raindy123/output_3963566438.jpg?type=w2"
          alt="My Image"
        ></img>
      </Lists>
    </Wrapper>
  );
}

const Name = styled.span`
  color: blue;
`;

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 5rem auto;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Btn = styled.button`
  font-size: 20px;
  margin: 10px auto;
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
