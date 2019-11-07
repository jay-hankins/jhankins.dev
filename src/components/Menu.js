import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import styled from 'styled-components';

const linksObj = [
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Journal', path: '/journal' },
  {
    type: 'a',
    title: 'Resume',
    path:
      'https://www.notion.so/jhankins/Jay-Hankins-27f05bd755124f46a5ad86374988440b',
  },
];

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
`;

const NavLi = styled.li`
  color: red;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

const NavA = styled.a`
  color: #555;
  box-shadow: none;
`;

const NavLink = styled(Link)`
  color: #555;
  box-shadow: none;
`;

const Menu = () => (
  <nav>
    <NavLinks>
      {linksObj.map(link =>
        link.type === 'a' ? (
          <NavLi key={link.path}>
            <NavA href={link.path}>{link.title}</NavA>
          </NavLi>
        ) : (
          <NavLi key={link.path}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </NavLi>
        )
      )}
    </NavLinks>
  </nav>
);

export default Menu;
