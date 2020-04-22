import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Contents>
        <Title1>졸업 전에 뿌리고 가는</Title1>
        <Title2>홍대 맛집 족보</Title2>
        <Link href="/question_food">
          <StartBtn>맛집 추천 시작</StartBtn>
        </Link>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  background-color: Azure;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 40px auto;
`;

const Title1 = styled.p`
  font-size: 3rem;
  text-align: center;
  margin: 1rem auto;
`;
const Title2 = styled.p`
  color: red;
  font-size: 3rem;
  text-align: center;
  margin: 1rem auto 5rem auto;
`;

const StartBtn = styled.button`
  font-size: 2rem;
  margin: 0 auto;
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
