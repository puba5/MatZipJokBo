import React, { useCallback } from "react";

import styled from "styled-components";
import { CLICK_CELL } from "../../pages/bingo";

export default function Td(props) {
  const { rowIndex, cellIndex, dispatch, cellData, bingoContent } = props;
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, []);
  return (
    <Wrapper>
      {!cellData && <NotSelected onClick={onClickTd}>{bingoContent}</NotSelected>}
      {cellData && <Selected onClick={onClickTd}>{bingoContent}</Selected>}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const NotSelected = styled.div`
  border: 2px solid black;
  width: 8rem;
  height: 8rem;
  font-size: 2rem;
  background-color: white;
  padding-top: 15%;
`;
const Selected = styled.div`
  border: 2px solid black;
  width: 8rem;
  height: 8rem;
  font-size: 2rem;
  background-color: pink;
  color: black;
  padding-top: 15%;
`;
