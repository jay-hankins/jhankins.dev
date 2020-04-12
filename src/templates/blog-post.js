import React from 'react';
import { Link, graphql } from 'gatsby';
import Fragment from 'react';
import Barcode from 'react-barcode';
import hash from 'hash-sum';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PGPInfo from '../components/PGPInfo';
import { rhythm, scale } from '../utils/typography';
import ThemeContext from '../context/ThemeContext';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const hasEmoji = post => {
      const emoji = post.frontmatter.emoji;
      return !(
        emoji === null ||
        emoji === undefined ||
        emoji === '' ||
        emoji === ' '
      );
    };
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            fontWeight: 500,
            marginBottom: '-2.5rem',
            color: 'rgb(136,136,136)',
          }}
        >
          {post.frontmatter.date}
        </p>
        <h1>
          {hasEmoji(post) && `${post.frontmatter.emoji}`}
          {hasEmoji(post) && <br />}
          {post.frontmatter.title}
        </h1>

        <ThemeContext.Consumer>
          {theme => (
            <ReactCSSTransitionReplace
              transitionName="cross-fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <div key={theme.darkMode}>
                <Barcode
                  value={hash(post.frontmatter.title)}
                  displayValue={false}
                  height={25}
                  width={1.5}
                  margin={0}
                  background={theme.darkMode ? '#212735' : '#ffffff'}
                  lineColor={!theme.darkMode ? '#212735' : '#ffffff'}
                />
              </div>
            </ReactCSSTransitionReplace>
          )}
        </ThemeContext.Consumer>
        <div
          style={{ marginTop: '4rem' }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <PGPInfo slug={post.fields.slug} />

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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        emoji
      }
    }
  }
`;
