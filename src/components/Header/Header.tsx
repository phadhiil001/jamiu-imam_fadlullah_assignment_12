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
  padding: 20px;
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
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-family: "Poppins", sans-serif;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: ${({ $disabled }) => ($disabled ? "none" : "underline")};
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

function Header({
  links,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: HeaderProps) {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent default behavior in Storybook
  };

  return (
    <HeaderWrapper
      $backgroundColor={backgroundColor}
      $isVisible={isVisible}
      $disabled={disabled}
      data-testid="header"
    >
      <Logo>FJamiu-Imam</Logo>
      <Nav>
        {links.map((link, index) => (
          <NavLink
            key={index}
            href={link.url}
            onClick={handleLinkClick}
            $disabled={link.disabled || disabled}
            data-testid={`navbar-link-${index}`}
          >
            {link.label}
          </NavLink>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
