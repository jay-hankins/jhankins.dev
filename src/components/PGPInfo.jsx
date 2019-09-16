//@ts-check
import React from 'react';
import styled from 'styled-components';

const githubPrefixUrl =
  'https://github.com/jay-hankins/jayhankins.me/tree/master/content/blog';

const StyledDiv = styled.div`
  letter-spacing: -0.3pt;
  font-size: smaller;
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin-right: 20px;
    }
    a {
      color: #505050;
      box-shadow: none;
    }
  }
`;

const PGPInfo = ({ slug }) => {
  return (
    <StyledDiv>
      <ul>
        <li>
          <a href={`${githubPrefixUrl}${slug}`}>View Post Source</a>
        </li>
        <li>
          <a href={`${githubPrefixUrl}${slug}index.md.asc`}>
            View PGP Signature
          </a>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default PGPInfo;
