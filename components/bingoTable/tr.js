import React from "react";
import Td from "./td";

import styled from "styled-components";

export default function Tr(props) {
  const { rowData, rowIndex, dispatch } = props;
  return (
    <Wrapper>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td cellIndex={i} rowIndex={rowIndex} dispatch={dispatch}>
            {" "}
          </Td>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-align: row;
`;
