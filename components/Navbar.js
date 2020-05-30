import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Nav>
      <Link href="/about">
        <LinkText>
          <LogoText>New Release</LogoText>
        </LinkText>
      </Link>
    </Nav>
  );
};

const LinkText = styled.a`
  text-decoration: none;
  color: #161313;
`;

const Nav = styled.nav`
  height: 64;
  background-color: #fff;
  padding: 16px 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export default Navbar;
