import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroWrapper = styled.div<{
  disabled?: boolean;
  backgroundImage?: string;
}>`
  width: 100%;
  height: 60vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

const HeroContent = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export function HeroImage({
  children,
  disabled,
  backgroundImage,
}: HeroImageProps) {
  return (
    <HeroWrapper
      disabled={disabled}
      backgroundImage={backgroundImage}
      data-testid="hero-image"
    >
      <HeroContent>{children}</HeroContent>
    </HeroWrapper>
  );
}
