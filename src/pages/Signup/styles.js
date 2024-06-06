import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 480px;
  box-shadow: 1px 2px 3px #0003;
  background-color: white;
  max-width: 560px;
  padding: 60px;
  border-radius: 5%;
`;

export const Label = styled.label`
  font-size: 38px;
  font-weight: 600;
  color: black;
`;

export const LabelSignin = styled.label`
  font-size: 18px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 16px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`;
