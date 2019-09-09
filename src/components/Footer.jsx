import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const FancyFooter = styled.footer`
  background-color: #2a2b2d;
  color: white;
`;

const Ffp = styled.p`
  margin: 0;
  font-size: small;
`;

const Ffa = styled.a`
  color: white;
`;

const Footer = theme => {
  return (
    <FancyFooter theme>
      <div
        style={{
          marginLeft: '10%',
          marginRight: '10%',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Ffp>© {new Date().getFullYear()} Jay Hankins</Ffp>
        <Ffp>
          Except where otherwise noted, content on this site is licensed under a
          <br />{' '}
          <Ffa href="http://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </Ffa>
          .
        </Ffp>
      </div>
    </FancyFooter>
  );
};

export default Footer;
