import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../assets/financeiro.png";
import * as C from "./SignupStyle";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !senha | !senhaConf) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>CADASTRO</C.Label>
        <C.img src={img} alt="img" />

        <C.Input type="email"placeholder="Digite seu E-mail"value={email}onChange={(e) => [setEmail(e.target.value), setError("")]}></C.Input>

        <C.Input type="password"placeholder="Crie sua Senha"value={senha}onChange={(e) => [setSenha(e.target.value), setError("")]}></C.Input>

        <C.Input type="password"placeholder="Confirme sua Senha"value={senhaConf}onChange={(e) => [setSenhaConf(e.target.value), setError("")]}></C.Input>

        <C.labelError>{error}</C.labelError>

        <C.Button onClick={handleSignup}>Registrar</C.Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entrar</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
