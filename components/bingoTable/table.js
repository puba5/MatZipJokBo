import React from "react";
import Tr from "./tr";

import styled from "styled-components";

export default function Table(props) {
  const { tableData, dispatch, bingoContent } = props;
  return (
    <Wrapper>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr
            rowData={tableData[i]}
            rowIndex={i}
            dispatch={dispatch}
            bingoContent={bingoContent[i]}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
