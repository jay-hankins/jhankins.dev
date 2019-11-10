import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import styled from 'styled-components';

const Title = styled.h3`
  font-family: 'IBM Plex Serif';
`;

const P = styled.p`
  font-family: 'IBM Plex Serif';
`;
class Journal extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Journal"
          keywords={[
            `blog`,
            `journal`,
            `javascript`,
            `react`,
            `gatsby`,
            `purdue`,
            `mac`,
            `unix`,
            `web`,
            `engineer`,
          ]}
        />
        <h2>Journal</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <Title
                style={{
                  marginBottom: rhythm(1 / 8),
                  fontWeight: 500,
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
              <small>{node.frontmatter.date}</small>
              <P dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default Journal;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { draft: { eq: false } }
        fileAbsolutePath: { glob: "**/journal/**/**.md" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 165)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
