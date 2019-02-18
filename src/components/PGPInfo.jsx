//@ts-check
import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const rawGithubPrefixUrl =
  'https://raw.githubusercontent.com/jay-hankins/jayhankins.me/master/content/blog/';

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
