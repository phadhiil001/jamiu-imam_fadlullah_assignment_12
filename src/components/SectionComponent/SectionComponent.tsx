import styled from "styled-components";
import { SectionComponentProps } from "./SectionComponent.types";

const SectionWrapper = styled.section<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  padding: 20px;
  font-size: 16px;
  color: #000;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export function SectionComponent({
  children,
  disabled,
  backgroundColor,
}: SectionComponentProps) {
  return (
    <SectionWrapper
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </SectionWrapper>
  );
}
