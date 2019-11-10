import React from 'react';
import { Link, graphql } from 'gatsby';
import Barcode from 'react-barcode';
import 'typeface-ibm-plex-serif';
import hash from 'hash-sum';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PGPInfo from '../components/PGPInfo';
import { rhythm, scale } from '../utils/typography';
import ThemeContext from '../context/ThemeContext';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import styled from 'styled-components';

const StyleP = styled.p`
  font-family: 'IBM Plex Serif';
`;

const StyleDiv = styled.div`
  font-family: 'Ibm Plex Serif';
`;

const Title = styled.h1`
  font-family: 'IBM Plex Serif';
  font-weight: 700;
`;

class JournalPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <k title={post.frontmatter.title} description={post.excerpt} />
        <Title>{post.frontmatter.title}</Title>
        <StyleP
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </StyleP>
        <StyleDiv dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <PGPInfo slug={post.fields.slug} />
        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default JournalPostTemplate;

export const pageQuery = graphql`
  query JournalPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 165)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
