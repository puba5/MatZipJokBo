import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function QuestionResult() {
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
          src="https://post-phinf.pstatic.net/MjAxODAxMThfMTUg/MDAxNTE2MjQzNzUzOTQ4.6N91-z5hxev-t7EGHIJM0s5Dj4Pt3m5RO9VqMPVBxeYg.XipqnQKRabTyzeblE1fIs9aS0eWvLu-27u5suiACO7Qg.PNG/45.PNG?type=w1200"
          alt="My Image"
        ></img>
      </Lists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  background-color: rgb(170, 240, 209);
`;

const Title = styled.p`
  font-size: 2rem;
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
