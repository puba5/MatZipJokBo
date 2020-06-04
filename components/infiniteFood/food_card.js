import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function FoodCard(props) {
  const { name, foodtype, price } = props;
  return (
    <Wrapper>
      <div>{name}</div>
      <div>{foodtype}</div>
      <div>{price}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  height: 40%;
  border: solid black 2px;
  margin: 2rem;
`;

const FoodName = styled.p``;
const FoodType = styled.p``;
const FoodPrice = styled.p``;
