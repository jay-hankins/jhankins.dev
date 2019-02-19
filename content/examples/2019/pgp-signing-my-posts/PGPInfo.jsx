// PGPInfo.jsx
import React from 'react';

const githubPrefixUrl =
  'https://github.com/jay-hankins/jayhankins.me/tree/master/content/blog';

const PGPInfo = ({ slug }) => {
  return (
    <div className="PGPInfo">
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
    </div>
  );
};

export default PGPInfo;
