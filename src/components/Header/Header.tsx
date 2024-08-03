import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./Header.types";

const HeaderWrapper = styled.header<{
  $backgroundColor?: string;
  $isVisible?: boolean;
  $disabled?: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000; /* Ensure the header is above other content */
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#1a1a1a"};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "auto")};
  font-family: "Poppins", sans-serif;
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 20px;
  }
`;

const Logo = styled.a<{ $disabled?: boolean }>`
  font-size: 24px;
  color: ${({ $disabled }) => ($disabled ? "#999" : "#fff")};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? "none" : "#333")};
    color: ${({ $disabled }) => ($disabled ? "#999" : "#ff0077")};
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
`;

const NavLink = styled.a<{ $disabled?: boolean }>`
  color: ${({ $disabled }) => ($disabled ? "#999" : "#fff")};
  text-decoration: none;
  margin-right: 20px;
  padding: 10px 15px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-family: "Poppins", sans-serif;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? "none" : "#333")};
    color: ${({ $disabled }) => ($disabled ? "#999" : "#ff0077")};
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }
`;

function Header({
  links,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: HeaderProps) {
  return (
    <HeaderWrapper
      $backgroundColor={backgroundColor}
      $isVisible={isVisible}
      $disabled={disabled}
      data-testid="header"
    >
      <Logo
        href="#home"
        $disabled={disabled}
      >
        FJamiu-Imam
      </Logo>
      <Nav>
        {links.map((link, index) => (
          <NavLink
            key={index}
            href={link.url}
            $disabled={link.disabled || disabled}
            data-testid={`navbar-link-${index}`}
            aria-label={link.label}
          >
            {link.label}
          </NavLink>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
