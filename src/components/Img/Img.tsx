// Img.tsx
import styled, { css } from "styled-components";
import { ImgProps } from "./Img.types";

const ImgStyled = styled.img<ImgProps>`
  width: 100%;
  height: auto;
  display: ${({ visible }) =>
    visible ? "block" : "none"}; // Conditionally set display property
  border: none;

  ${({ defaultTextColor }) =>
    defaultTextColor &&
    css`
      color: ${defaultTextColor};
    `}
  ${({ defaultBackgroundColor }) =>
    defaultBackgroundColor &&
    css`
      background-color: ${defaultBackgroundColor};
    `}
  ${({ disabled, disabledTextColor, disabledBackgroundColor }) =>
    disabled &&
    css`
      cursor: not-allowed;
      filter: grayscale(100%);
      ${disabledTextColor &&
      css`
        color: ${disabledTextColor};
      `}
      ${disabledBackgroundColor &&
      css`
        background-color: ${disabledBackgroundColor};
      `}
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

const MyImg = ({
  src,
  alt,
  visible,
  disabled,
  defaultTextColor,
  defaultBackgroundColor,
  disabledTextColor,
  disabledBackgroundColor,
}: ImgProps) => {
  return (
    <ImgStyled
      src={src}
      alt={alt}
      visible={visible}
      disabled={disabled}
      defaultTextColor={defaultTextColor}
      defaultBackgroundColor={defaultBackgroundColor}
      disabledTextColor={disabledTextColor}
      disabledBackgroundColor={disabledBackgroundColor}
      data-testid="img-component"
    />
  );
};

export default MyImg;
