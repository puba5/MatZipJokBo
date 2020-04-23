import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  return (
    <Wrapper>
      <Contents>
        <Title1>졸업 전에</Title1>
        <Title1>뿌리는</Title1>
        <Title2>홍대 맛집 족보</Title2>
        <Link href="/question">
          <StartBtn>맛집 추천 시작</StartBtn>
        </Link>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 3rem;
  background-color: rgb(170, 240, 209);
`;

const Contents = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 2rem auto;
  width: 70%;
`;

const Title1 = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem auto;
`;
const Title2 = styled.p`
  color: red;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 1rem auto 5rem auto;
`;

const StartBtn = styled.button`
  font-size: 0.7rem;
  margin: 0 auto;
  width: 6rem;
  height: 3rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
