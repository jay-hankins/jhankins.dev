import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

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
        <p>Or use the form below to send me a message.</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrMKOv0y1HYwim1d?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="825" style="background: transparent; border: 1px solid #ccc;"></iframe>
  `,
          }}
        />
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
