import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function BeforeResult(props) {
  const { userData } = props;
  const { Price, FoodType } = userData;
  const tmi = [];
  return (
    <Wrapper>
      <Link href={`/result?price=${Price}&foodType=${FoodType}`}>
        <Lists>
          <Title>
            결과를 보려면 <br />
            눌러주세요!
          </Title>
          <Content>{`<홍대 TMI> 과거 C동 8층에는 우동을 팔았다. 이를 C8 우동이라고 했다.`}</Content>
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

const Content = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem auto;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
