import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 450px;
  box-shadow: 1px 2px 3px #0003;
  background-color: white;
  max-width: 450px;
  padding: 50px;
  border-radius: 5%;
`;

export const Label = styled.label`
  font-size: 38px;
  font-weight: bolder;
  color: black;
`;

export const LabelSignup = styled.label`
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
