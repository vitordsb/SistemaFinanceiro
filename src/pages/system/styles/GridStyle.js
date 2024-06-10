import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 3px 3px 5px black;
  border-radius: 15px;
  font-weight: bold;
  max-width: 1120px;
  margin: auto;
`;

export const Thead = styled.thead`
  font-size: 25px;
`;

export const Tbody = styled.tbody`
  font-size: 20px;
  border: none;
`;

export const Tr = styled.tr`
  
`;

export const Th = styled.th`
  padding-bottom: 5px;
  text-align: center;
  border: 2px solid #ccc;
  box-shadow: 1px 4px 4px #ccc;
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
