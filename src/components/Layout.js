import { Link } from 'gatsby';
import React from 'react';
import Footer from '../components/Footer';

import Menu from '../components/Menu';

// import './layout.css';
import ThemeContext from '../context/ThemeContext';
import { rhythm } from '../utils/typography';
import styled from 'styled-components';
import DarkModeSwitcherButton from '../components/DarkmodeSwitcherButton';

const Header = styled.h1`
  margin-top: 0;
  font-weight: 300;
  font-size: 1.7rem;
  ${props => {
    if (props.darkMode) {
      return `
  transition: all 0.3s ease;
  
  a, a:visited {
    color: #fff !important;
  }`;
    }
  }}
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: all 0.3s ease;
  h2 > a {
    box-shadow: none;
  }
  ${props => {
    if (props.darkMode) {
      return `background-color: #2f3640;
  color: #fff;
  transition: all 0.3s ease;
  
  a, a:visited {
    color: rgb(73, 223, 255);
  }
  
  hr {
    background: #505050;
  }
  
  blockquote: {
    color: inherit;
    border-color: inherit;
  }
  `;
    }
  }}
`;

const MainContainer = styled.div`
  flex: 1;
`;

const LeftContainer = styled.div`
  @media (min-width: 735px) {
    margin: 0 10%;
  }
  margin: 0 1%;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <ThemeContext.Consumer>
        {themeObj => (
          <FlexContainer darkMode={themeObj.darkMode}>
            <MainContainer>
              <LeftContainer>
                <Header darkMode={themeObj.darkMode}>
                  <StyledLink to={`/`}>{title}</StyledLink>
                  <DarkModeSwitcherButton theme={themeObj} />
                </Header>

                <Menu />

                {children}
              </LeftContainer>
            </MainContainer>
            <Footer darkMode={themeObj.darkMode} />
          </FlexContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Layout;
