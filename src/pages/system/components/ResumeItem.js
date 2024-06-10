import React from "react";
import * as C from "../styles/ResumeItemStyle";

const ResumeItem = ({ title, Icon, value, color, letra}) => {
  return (
    <C.Container letra={letra} color={color}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
