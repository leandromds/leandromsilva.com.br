import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/post-link'
const IndexBlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      const lang = edge.node.frontmatter.language
      if (lang === 'en') {
        return <PostLink key={edge.node.id} post={edge.node} />
      }
    })
  return <div>{Posts}</div>
}
export default IndexBlogPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            tags
            language
            image

          }
        }
      }
    }
  }
`
