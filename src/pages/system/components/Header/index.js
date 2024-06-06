import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Header>
        <C.Title>FinanceSystemVI</C.Title>
        <C.Button Text="Sair" onClick={() => [signout(), navigate("/")]}>Fazer logout</C.Button>
      </C.Header>
    </C.Container>
  );
};

export default Header;
