import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BeforeResult(props) {
  const router = useRouter();
  const { userData } = props;
  const { Price, FoodType } = userData;
  return (
    <Wrapper>
      <Link href={`/result?price=${Price}&foodType=${FoodType}`}>
        <Lists>
          <Title>
            결과를 보려면 <br />
            눌러주세요!
          </Title>
        </Lists>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 3rem;
  background-color: rgb(170, 240, 209);
`;

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
`;

const SelectList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Btn = styled.button`
  font-size: 1.5rem;
  margin: 10px auto;
  width: 16rem;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
