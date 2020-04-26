import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function QuestionFoodType(props) {
  const router = useRouter();
  const { userName } = router.query;
  const { changeQuestion, addUserData, userData } = props;

  const nextStep = (e) => {
    const newUserData = { FoodType: userData.FoodType, Price: userData.Price };
    changeQuestion(1);
    newUserData.FoodType = e.target.name;
    addUserData(newUserData);
  };
  return (
    <Wrapper>
      <Lists>
        <Title>너 뭐 좋아해??</Title>
        <SelectList>
          <Btn onClick={nextStep} name="K">
            한식
          </Btn>
          <Btn onClick={nextStep} name="C">
            중식
          </Btn>
          <Btn onClick={nextStep} name="J">
            일식
          </Btn>
          <Btn onClick={nextStep} name="E">
            기타
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
  width: 80%;
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
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
