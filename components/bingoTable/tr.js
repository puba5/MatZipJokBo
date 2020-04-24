import React from "react";
import Td from "./td";

import styled from "styled-components";

export default function Tr(props) {
  const { rowData } = props;
  return (
    <Wrapper>
      {Array(rowData.length)
        .fill()
        .map((td) => (
          <Td />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-align: row;
`;
