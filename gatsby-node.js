const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' })
    createNodeField({
      node,
      name: 'slug',
      value: `blog/${slug.slice(12)}`
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  const result = await graphql(
    `{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              description
              title
              tags
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    const slug = node.fields.slug

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug: slug,
        // the order is different here because of the DESC order
        previous: next,
        next: previous
      }
    })
  })
}
