import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "./financeiro.png";

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
        <Input type="email"placeholder="E-mail"value={email}onChange={(e) => [setEmail(e.target.value), setError("")]}/>

        <Input type="password"placeholder="Password"value={senha}onChange={(e) => [setSenha(e.target.value), setError("")]}/>
        <C.labelError>{error}</C.labelError>

        <Button Text="Enter" onClick={handleLogin} />
        
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
