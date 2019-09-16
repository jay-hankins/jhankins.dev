import React, { Component } from 'react';

import standby from '../../content/assets/standby.png';
import sun from '../../content/assets/sun.png';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #555;
  margin-bottom: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-left: 0;

  @media (min-width: 992px) {
    position: absolute;
    right: 20px;
    top: 15px;
  }
`;

const StyledLabel = styled.span`
  font-size: smaller;
  vertical-align: top;
`;

const Emoji = styled.span`
  padding-left: 0.8rem;
  img {
    height: 28px;
    width: 28px;
    display: inline-block;
    margin: 0;
    vertical-align: top;
  }
`;

const DarkmodeSwitcherButton = props => {
  return (
    <StyledButton
      className="darkmode-switcher"
      onClick={props.theme.toggleDarkMode}
    >
      {props.theme.darkMode ? (
        <div>
          <StyledLabel>Light mode</StyledLabel>
          <Emoji>
            ️<img src={sun} alt="Wake Icon" />
          </Emoji>
        </div>
      ) : (
        <div>
          <StyledLabel>Dark mode</StyledLabel>
          <Emoji>
            ️<img src={standby} alt="Windows 98 Standby Icon" />
          </Emoji>
        </div>
      )}
    </StyledButton>
  );
};

export default DarkmodeSwitcherButton;
