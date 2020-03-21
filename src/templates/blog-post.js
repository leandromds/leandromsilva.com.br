import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { markdownRemark: post } = data
  const metadata = post.frontmatter
  const html = post.html

  return (
    <div className='blog-post-container'>
      <Helmet title={`leandromsilva - ${metadata.title}`} />
      <div className='blog-post'>
        <p>{metadata.date}</p>
        <img src={metadata.image} alt="text here"/>
        <h1>{metadata.title}</h1>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
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
        language
        tags
        image
      }
      timeToRead
    }
  }
`
