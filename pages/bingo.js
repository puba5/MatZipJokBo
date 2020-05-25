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
    ["다락투", "더피자보이즈🍕", "향미", "지지고", "김덕후의곱창고"],
    ["블랙스톤🍖", "김피라", "카미야", `무라🍜`, "박용석스시"],
    ["카이화", "아웃닭", "또보겠지떡볶이", "가미우동", "뉴오더클럽"],
    ["테이스티버거", "사모님돈까스", "식스티즈버거🍔", "윤씨밀방", "빤닭빤닭"],
    ["진만두🥟", "히메시야", "초마", "우산", "미식당🍚"],
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
        <Title>🏫 홍대 맛집 빙고 🍔</Title>
        <Description>너 홍대 다니면서 여기도 안가봤어?</Description>
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
  padding: 2rem 2rem;
`;

const Title = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 1.5rem auto;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  align-items: center;
`;
