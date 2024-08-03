import styled from "styled-components";
import { MyButtonProps } from "./MyButton.types";

const Button = styled.button<MyButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor || "#007bff"};
  border: none;
  border-radius: 4px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

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

export function sum(a: number, b: number) {
  return a + b;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <Button
      data-testid="MyButton"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;

// Function to determine button styles
export function getButtonStyles(
  disabled: boolean,
  backgroundColor: string | undefined
): { backgroundColor: string; cursor: string } {
  if (disabled) {
    return {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    };
  }
  return {
    backgroundColor: backgroundColor || "#007bff",
    cursor: "pointer",
  };
}
