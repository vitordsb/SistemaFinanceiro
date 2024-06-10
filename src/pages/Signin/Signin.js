import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../assets/financeiro.png";
import * as C from "./SigninStyle";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>LOGIN</C.Label>
        <C.img src={img} alt="img" />
        <C.Input type="email"placeholder="E-mail"value={email}onChange={(e) => [setEmail(e.target.value), setError("")]}></C.Input>

        <C.Input type="password"placeholder="Password"value={senha}onChange={(e) => [setSenha(e.target.value), setError("")]}></C.Input>
        <C.labelError>{error}</C.labelError>

        <C.Button onClick={handleLogin}>Enter</C.Button> 
        
        <C.LabelSignup>
          Não possui login?
          
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
      
    </C.Container>
  );
};

export default Signin;
