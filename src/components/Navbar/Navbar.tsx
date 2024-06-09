import styled from 'styled-components';
import { NavbarProps } from './Navbar.types';

const NavbarWrapper = styled.nav<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#333'};
`;

const NavbarLinks = styled.div`
  display: flex;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavbarLogo = styled.div`
  font-size: 24px;
  color: #fff;
`;

function Navbar({ links, backgroundColor }: NavbarProps) {
  return (
    <NavbarWrapper backgroundColor={backgroundColor}>
      <NavbarLogo>YourLogo</NavbarLogo>
      <NavbarLinks>
        {links.map((link, index) => (
          <NavbarLink key={index} href={link.url}>
            {link.label}
          </NavbarLink>
        ))}
      </NavbarLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
