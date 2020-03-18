import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export default function Template ({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <div className='blog-post-container'>
      <Helmet title={`leandromsilva - ${post.frontmatter.title}`} />
      <div className='blog-post'>
        <p>{post.frontmatter.date}</p>
        <img src={post.frontmatter.image} />
        <h1>{post.frontmatter.title}</h1>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        tags
        image
      }
      timeToRead
    }
  }
`
