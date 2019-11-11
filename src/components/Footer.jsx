import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const FancyFooter = styled.footer`
  background-color: #2a2b2d;
  color: white;
`;

const Ffp = styled.p`
  margin: 0 0 1rem 0;
  font-size: small;
`;

const Ffa = styled.a`
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Footer = theme => {
  return (
    <FancyFooter theme>
      <Container>
        <Row>
          <div style={{ minWidth: '9rem' }}>
            <Ffp>© {new Date().getFullYear()} Jay Hankins — </Ffp>
          </div>{' '}
          <div style={{ width: '18rem', flexGrow: 1 }}>
            <Ffp>
              Except where otherwise noted, content on this site is licensed
              under a&nbsp;
              <Ffa href="http://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0 International
                License
              </Ffa>
              .
            </Ffp>
          </div>
        </Row>
        <Row>
          <Ffp>
            This site doesn't track you— I don't collect analytics. <br /> Want
            to share how you found my site, or give me feedback?{' '}
            <StyledLink to="/contact"> I'd love to hear from you.</StyledLink>
          </Ffp>
        </Row>
      </Container>
    </FancyFooter>
  );
};

export default Footer;
