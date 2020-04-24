import React, { useState, useReducer, useCallback } from "react";
import styled from "styled-components";
import Table from "../components/bingoTable/table";

const initalState = {
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  tableCheck: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

// action을 해석하여 state에 반영
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };
  }
};

const SET_TABLE_DATA = "SET_TABLE_DATA";

export default function Bingo() {
  const [state, setState] = useReducer(reducer, initalState);

  // action을 생성
  const onClickTable = useCallback(() => {
    dispatch({
      type: SET_TABLE_DATA,
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    });
  }, []);

  return (
    <Wrapper>
      <Lists>
        <Title>홍대 맛집 빙고</Title>
        <Table onClick={onClickTable} tableData={state.tableData} />
      </Lists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 3rem;
  min-height: 100vh;
  background-color: rgb(170, 240, 209);
  padding: 2rem 4rem;
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
  margin: auto;
`;
