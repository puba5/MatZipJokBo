import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function QuestionResult() {
  const router = useRouter();
  const { price, foodType } = router.query;
  const [restaurantInfo, setRestaurantInfo] = useState({ name: "", link: "", img: "", menu: "" });
  useEffect(() => {
    showResult();
  }, []);

  const showResult = () => {
    const initializeRestuarantInfo = { name: "", link: "", img: "" };
    switch (foodType) {
      case "J":
        switch (price) {
          case "00":
            initializeRestuarantInfo.name = "삭튀김";
            initializeRestuarantInfo.img =
              "https://t1.daumcdn.net/cfile/tistory/1819D3455002ACEB23?original";
            break;
          case "01":
            initializeRestuarantInfo.name = "카미야";
            initializeRestuarantInfo.img = "https://img.siksinhot.com/article/1456731101214142.jpg";
            break;
          case "02":
            initializeRestuarantInfo.name = "무라";
            initializeRestuarantInfo.img = "";
            break;
          case "03":
            initializeRestuarantInfo.name = "박용석스시";
            initializeRestuarantInfo.img = "";
            break;
          default:
            initializeRestuarantInfo.name = "가미우동";
        }
        break;
      case "K":
        switch (price) {
          case "00":
            initializeRestuarantInfo.name = "국시와 가래떡";
            break;
          case "01":
            initializeRestuarantInfo.name = "김피라";
            break;
          case "02":
            initializeRestuarantInfo.name = "또 보겠지 떡볶이";
            break;
          case "03":
            initializeRestuarantInfo.name = "공복";
            break;
          default:
            initializeRestuarantInfo.name = "가미우동";
        }
        break;
      case "C":
        switch (price) {
          case "00":
            initializeRestuarantInfo.name = "청해루";
            break;
          case "01":
            initializeRestuarantInfo.name = "진만두";
            break;
          case "02":
            initializeRestuarantInfo.name = "초마";
            break;
          case "03":
            initializeRestuarantInfo.name = "맛이차이나";
            break;
          default:
            initializeRestuarantInfo.name = "가미우동";
        }
        break;
      case "E":
        switch (price) {
          case "00":
            initializeRestuarantInfo.name = "식스티즈 버거";
            break;
          case "01":
            initializeRestuarantInfo.name = "닭꼬얌";
            break;
          case "02":
            initializeRestuarantInfo.name = "윤씨밀방";
            break;
          case "03":
            initializeRestuarantInfo.name = "더피자보이즈서교";
            break;
          default:
            initializeRestuarantInfo.name = "가미우동";
        }
        break;
    }
    setRestaurantInfo(initializeRestuarantInfo);
  };
  return (
    <Wrapper>
      <Lists>
        <Title>
          그럼 너는
          {""} <a href={restaurantInfo.link}>{restaurantInfo.name}</a>
          (이)야!
        </Title>
        <FoodImg src={restaurantInfo.img} alt={`음식 사진`}></FoodImg>
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

const FoodImg = styled.img`
  margin: 2rem auto;
  width: 80%;
  height: 80%;
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
