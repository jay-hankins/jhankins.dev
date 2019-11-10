const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const journalPost = path.resolve(`./src/templates/journal-post.js`);

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { glob: "**/blog/**/**.md" }
            fields: { draft: { eq: false } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        journal: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { glob: "**/journal/**/**.md" }
            fields: { draft: { eq: false } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    const journals = result.data.journal.edges;

    journals.forEach((journal, index) => {
      const previous =
        index === journals.length - 1 ? null : journals[index + 1].node;
      const next = index === 0 ? null : journals[index - 1].node;
      console.log(journal.node.fields.slug);

      createPage({
        path: `${journal.node.fields.slug}`,
        component: journalPost,
        context: {
          slug: `${journal.node.fields.slug}`,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
