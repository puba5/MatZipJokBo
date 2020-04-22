import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Lists>
        <Title>얼마 정도 원해?</Title>
        <Link href="/question_result">
          <Btn>5,000원</Btn>
        </Link>
        <Link href="/question_result">
          <Btn>10,000원</Btn>
        </Link>
        <Link href="/question_result">
          <Btn>15,000원</Btn>
        </Link>
        <Link href="/question_result">
          <Btn>20,000원</Btn>
        </Link>
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
