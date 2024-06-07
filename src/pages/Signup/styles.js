import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 450px;
  box-shadow: 1px 2px 3px #0003;
  background-color: white;
  max-width: 850px;
  padding: 50px;
  border-radius: 15px;
`;

export const img = styled.img`
  position: absolute;
  width: 420px;
  margin-left: 400px;
  height: 420px;
  border-radius: 15px;
`;

export const Label = styled.label`
  font-size: 38px;
  font-weight: bolder;
  color: black;
  margin-right: 400px;
`;

export const LabelSignin = styled.label`
  font-size: 18px;
  color: #676767;
  margin-right: 400px;
`;

export const labelError = styled.label`
  font-size: 16px;
  color: red;
  margin-right: 400px;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`;
