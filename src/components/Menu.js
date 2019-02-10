import React from 'react';
import { Link, graphql } from 'gatsby';

// import resumePdf from '../../content/resume.pdf';

import { rhythm } from '../utils/typography';

const links = [{ title: 'Resume', path: '/resume.pdf', type: 'a' }];

const Menu = () => (
  <nav class="menu">
    <ul style={{ listStyle: 'none' }} id="menu" class="menu">
      {links.map(link =>
        link.type === 'a' ? (
          <li class="navItem">
            <a href={link.path}>{link.title}</a>
          </li>
        ) : (
          <li class="navItem">
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
