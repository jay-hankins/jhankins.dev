import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const social = data.site.siteMetadata.social;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Jay Hankins" />
        <h2>Contact</h2>
        <p>
          Tweet me{' '}
          <a href={`https://twitter.com/${social.twitter}`}>@jay_hankins</a>!
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
        social {
          twitter
        }
      }
    }
  }
`;
