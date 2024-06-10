import styled from "styled-components";
import { NavbarProps } from "./Navbar.types";

const NavbarWrapper = styled.nav<{
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#333"};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

const NavbarLinks = styled.div`
  display: flex;
`;

const NavbarLink = styled.a<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#999" : "#fff")};
  text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
  margin-right: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
  }
`;

const NavbarLogo = styled.div`
  font-size: 24px;
  color: #fff;
`;

function Navbar({ links, backgroundColor, isVisible, disabled }: NavbarProps) {
  return (
    <NavbarWrapper
      backgroundColor={backgroundColor}
      isVisible={isVisible}
      disabled={disabled}
    >
      <NavbarLogo>FJamiu-Imam</NavbarLogo>
      <NavbarLinks>
        {links.map((link, index) => (
          <NavbarLink
            key={index}
            href={!disabled ? link.url : undefined}
            onClick={!disabled ? undefined : (e) => e.preventDefault()}
            disabled={disabled}
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
