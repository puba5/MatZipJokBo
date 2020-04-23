import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";
import QuestionPrice from "../components/question_price";
import QuestionFoodType from "../components/question_foodtype";
import BeforeResult from "../components/before_result";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;
  const [questionNum, setQuestionNum] = useState(0);
  const [userSelection, SetUserSelection] = useState({ FoodType: "", Price: "" });

  return (
    <Wrapper>
      {questionNum == 0 && (
        <QuestionFoodType
          changeQuestion={setQuestionNum}
          userData={userSelection}
          addUserData={SetUserSelection}
        />
      )}
      {questionNum == 1 && (
        <QuestionPrice
          changeQuestion={setQuestionNum}
          userData={userSelection}
          addUserData={SetUserSelection}
        />
      )}
      {questionNum == 2 && <BeforeResult />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(170, 240, 209);
`;
