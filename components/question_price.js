import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function QuestionPrice(props) {
  const router = useRouter();
  const { userName } = router.query;
  const { changeQuestion, addUserData, userData } = props;

  const nextStep = (e) => {
    const newUserData = { FoodType: userData.FoodType, Price: userData.Price };

    newUserData.Price = e.target.name;
    changeQuestion(2);
    addUserData(newUserData);
  };
  //name은 less Price, over Price, Price Unit = 천원
  return (
    <Wrapper>
      <Lists>
        <Title>얼마 정도 원해?</Title>
        <SelectList>
          <Btn onClick={nextStep} name="L5">
            돈이 없어 ㅠ<br />( ~5,000원 )
          </Btn>
          <Btn onClick={nextStep} name="O5L8">
            밥 먹을 돈은 있어!
            <br />( 5,000원 ~ 8,000원 )
          </Btn>
          <Btn onClick={nextStep} name="O8L10">
            사치 좀 부려볼까~?
            <br />( 8,000원 ~ 10,000원 )
          </Btn>
          <Btn onClick={nextStep} name="O10">
            FLEX!!!!!!
            <br />( 10,000원 ~ )
          </Btn>
        </SelectList>
      </Lists>
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
