/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Box = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

const Playground = () => {
  return (
    <div
      css={css`
        width: 130px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        box-sizing: border-box;
        margin: 0 auto;
      `}
    >
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
};

export { Playground };
