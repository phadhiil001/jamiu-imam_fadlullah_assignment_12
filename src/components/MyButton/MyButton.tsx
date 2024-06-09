import styled from "styled-components";
import { MyButtonProps } from "./MyButton.types";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #c05854;
    transition: background-color 0.3s ease;
  }

  &:active {
    cursor: pointer;
  }
`;

const MyButton = (props: MyButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default MyButton;
