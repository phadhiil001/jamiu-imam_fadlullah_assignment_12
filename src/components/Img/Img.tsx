import styled, { css } from "styled-components";
import { ImgProps } from "./Img.types";

const ImgStyled = styled.img<ImgProps>`
  width: 100%;
  height: auto;
  display: ${({ visible }) =>
    visible ? "block" : "none"}; // Conditionally set display property
  border: none;

  ${({ defaultTextColor }) => defaultTextColor && `color: ${defaultTextColor};`}
  ${({ defaultBackgroundColor }) =>
    defaultBackgroundColor && `background-color: ${defaultBackgroundColor};`}
  ${({ disabled, disabledTextColor, disabledBackgroundColor }) =>
    disabled &&
    css`
      cursor: not-allowed;
      filter: grayscale(100%);
      ${disabledTextColor && `color: ${disabledTextColor};`}
      ${disabledBackgroundColor &&
      `background-color: ${disabledBackgroundColor};`}
    `}

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.33%;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }
`;

export default ImgStyled;
