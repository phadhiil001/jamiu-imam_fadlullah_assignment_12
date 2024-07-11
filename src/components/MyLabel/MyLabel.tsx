// MyLabel.tsx
import styled from "styled-components";
import { MyLabelProps } from "./MyLabel.types";

const StyledLabel = styled.label<MyLabelProps>`
  font-size: 24px;
  color: ${({ disabled }) => (disabled ? "#535657" : "#53bee5")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#e35353" : "#5bb0c3")};
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : "#f0f0f0"};
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ disabled }) => (disabled ? "transparent" : "rgba(0, 0, 255, 0.5)")};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

const MyLabel = ({
  children,
  disabled,
  onClick,
  backgroundColor,
}: MyLabelProps) => {
  return (
    <StyledLabel
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      backgroundColor={backgroundColor}
      data-testid="my-label"
    >
      {children}
    </StyledLabel>
  );
};

export default MyLabel;

// Function to determine label styles
export function getLabelStyles(
  disabled: boolean,
  backgroundColor: string | undefined
): { color: string; backgroundColor: string; cursor: string } {
  if (disabled) {
    return {
      color: "#535657",
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    };
  }
  return {
    color: "#53bee5",
    backgroundColor: backgroundColor || "transparent",
    cursor: "pointer",
  };
}
