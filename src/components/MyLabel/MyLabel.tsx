// import styled from "styled-components";
// import { MyLabelProps } from "./MyLabel.types";

// const Label = styled.label<MyLabelProps>`
//   font-size: 16px;
//   color: ${(props) => props.disabled ? "#f38282" : "#2580d0"};
//   font-weight: ${(props) => (props.bold ? "bold" : "normal")};
// `;

// const MyLabel = ({ children, ...rest }: MyLabelProps) => {
//   return <Label {...rest}>{children}</Label>;
// };

// export default MyLabel;

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

export default StyledLabel;
