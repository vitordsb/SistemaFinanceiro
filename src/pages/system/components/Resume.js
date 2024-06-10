import React from "react";
import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign,} from "react-icons/fa";
import ResumeItem from "./ResumeItem";
import * as C from "../styles/ResumeStyle";

const Resume = ({ income, expense, total }) => {

  return (
    <C.Container>
      <ResumeItem letra={"black"} color={"#18864b"} title="Entradas" Icon={FaRegArrowAltCircleUp}value={income}/>

      <ResumeItem letra={"black"} color={"#d32121"} title="Saídas" Icon={FaRegArrowAltCircleDown}value={expense}/>
      
      <ResumeItem letra={"black"} color={"white"} title="Saldo atual" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
