import React, { useReducer, useCallback } from "react";
import styled from "styled-components";
import Table from "../components/bingoTable/table";

const initalState = {
  tableData: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],

  bingoContent: [
    ["", "", "", "", ""],
    ["", "김피라", "카미야", `무라🍜`, ""],
    ["", "아웃닭", "또보겠지떡볶이", "가미우동", ""],
    ["", "사모님돈까스", "식스티즈버거🍔", "윤씨밀방", ""],
    ["", "", "", "", ""],
  ],
};

// action을 해석하여 state에 반영
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ],
      };
    case CLICK_CELL:
      console.log(action.cell);
      console.log(state.tableData);
      const tableData = [...state.tableData];
      console.log(tableData);
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = "O";
      console.log(tableData);
      return {
        ...state,
        tableData,
      };
  }
};

export const SET_TABLE_DATA = "SET_TABLE_DATA";
export const CLICK_CELL = "CLICK_CELL";

export default function Bingo() {
  const [state, dispatch] = useReducer(reducer, initalState);

  // action을 생성
  const onClickTable = useCallback(() => {
    dispatch({
      type: SET_TABLE_DATA,
      tableData: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
    });
  }, []);

  return (
    <Wrapper>
      <Lists>
        <Title>홍대 맛집 빙고</Title>
        <Description>홍대생이면 이 정도는 가봤어야하는거 아니냐?</Description>
        <Table
          onClick={onClickTable}
          tableData={state.tableData}
          dispatch={dispatch}
          bingoContent={state.bingoContent}
        />
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
  font-size: 4rem;
  text-align: center;
  margin: 3rem;
`;

const Description = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  align-items: center;
`;
