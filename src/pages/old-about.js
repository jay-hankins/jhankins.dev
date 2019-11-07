import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const BigText = styled.h1`
  font-weight: 700;
  font-size: 6.9rem;
`;

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Jay Hankins" />

        <h2>About</h2>
        <p>Hi, I'm Jay.</p>
        <p>
          I'm a software engineer! Parts of this site, like the rest of my life,
          are a work in progress.
        </p>
        <p>
          This site best viewed in Firefox. Not really, it should work in any
          modern browser. But I am a Firefox fan. You should give it a try.
        </p>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
