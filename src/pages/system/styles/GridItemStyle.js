import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 20px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  font-size: 25px;

  svg {
    width: 25px;
    height: 25px;
  }
`;
