import React, { useCallback } from "react";

import styled from "styled-components";
import { CLICK_CELL } from "../../pages/bingo";

export default function Td(props) {
  const { rowIndex, cellIndex, dispatch } = props;
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    // dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, []);
  return <Wrapper onClick={onClickTd}> </Wrapper>;
}

const Wrapper = styled.div`
  border: 2px solid black;
  width: 4rem;
  height: 4rem;
`;
