import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 10px auto;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 10px;
  padding: 5px 5px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  font-size: 20px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  input {
    margin-left: 20px;
    margin-right: 10px;
    accent-color: black;
    margin-top: 0;
  }
`;
export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: #046ee5;
`;
