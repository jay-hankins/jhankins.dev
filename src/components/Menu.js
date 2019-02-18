import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const links = [{ title: 'Resume', path: '/resume.pdf', type: 'a' }];

const Menu = () => (
  <nav className="menu">
    <ul style={{ listStyle: 'none' }} id="menu" className="menu">
      {links.map(link =>
        link.type === 'a' ? (
          <li className="navItem">
            <a href={link.path}>{link.title}</a>
          </li>
        ) : (
          <li className="navItem">
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={link.path}
            >
              {link.title}
            </Link>
          </li>
        )
      )}
    </ul>
  </nav>
);

export default Menu;
