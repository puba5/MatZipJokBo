import React from "react";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BeforeResult(props) {
  const { userData } = props;
  const { Price, FoodType } = userData;
  const [tmiContent, setTmiContent] = useState("생각하는 중이에요...🤔");

  // axios를 이용하여 데이터 가져옴
  const getTmi = async () => {
    const tmiNumber = Math.floor(Math.random() * 16);
    try {
      const data = await axios
        .get(process.env.API_HOST + `/GET/tmi/${tmiNumber}`, {
          params: {},
        })
        .then(function (response) {
          return response.data;
        });
      console.log(data);
      setTmiContent(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // 1초 딜레이를 주어서 문구를 보게 함
    setTimeout(() => {
      getTmi();
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Link href={`/result?price=${Price}&foodType=${FoodType}`}>
        <Lists>
          <Title>
            결과를 보려면 <br />
            화면을 클릭해주세요!
          </Title>
          <Content>{`<홍대 TMI> ${tmiContent}`}</Content>
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
