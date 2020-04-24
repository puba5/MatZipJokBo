import React from "react";
import Tr from "./tr";

import styled from "styled-components";

export default function Table(props) {
  const { tableData } = props;
  return (
    <Wrapper>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
