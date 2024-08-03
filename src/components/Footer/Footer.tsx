import React from "react";
import styled from "styled-components";
import { FooterProps } from "./Footer.types";

const FooterWrapper = styled.footer<{
  $backgroundColor?: string;
  $isVisible?: boolean;
  $disabled?: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  padding: 20px 40px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#1a1a1a"};
  color: #fff;
  width: 100%;
  margin-bottom: 40px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "auto")};
  font-family: "Poppins", sans-serif;
  text-align: center;
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #ccc;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a<{ $disabled?: boolean }>`
  color: ${({ $disabled }) => ($disabled ? "#999" : "#fff")};
  text-decoration: none;
  font-size: 20px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ $disabled }) => ($disabled ? "#999" : "#1e90ff")};
  }
`;

function Footer({
  links,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: FooterProps) {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
    <FooterWrapper
      $backgroundColor={backgroundColor}
      $isVisible={isVisible}
      $disabled={disabled}
      data-testid="footer"
    >
      <FooterText>&copy; 2024 FJamiu-Imam. All rights reserved.</FooterText>
      <SocialLinks>
        {links.map((link, index) => (
          <SocialLink
            key={index}
            href={link.url}
            target="_blank"
            onClick={handleLinkClick}
            $disabled={link.disabled || disabled}
            data-testid={`footer-link-${index}`}
            aria-label={link.label}
          >
            <i className={`fab fa-${link.label.toLowerCase()}`} />
          </SocialLink>
        ))}
      </SocialLinks>
    </FooterWrapper>
  );
}

export default Footer;
