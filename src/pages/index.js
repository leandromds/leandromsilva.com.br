import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'

import Logo from '../components/logo'

export default ({ data }) => {
  const intl = useIntl()
  const getSvgUrl = data.allFile.edges.filter(value => {
    return value.node.extension === 'svg'
  })
  const bgImgUrl = data.allImageSharp.edges.filter(value => {
    const findedBg = value.node.fixed.src.indexOf('what-the-hex')
    return findedBg >= 0
  })

  return (
    <ProviPage bgImgUrl={bgImgUrl[0].node.fixed.src}>
      {getSvgUrl && <Logo url={getSvgUrl[0].node.publicURL} />}
      <h1>{intl.formatMessage({ id: 'ProvisionalPage.title' })}</h1>
    </ProviPage>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          publicURL
          extension
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fixed {
            src
          }
        }
      }
    }
  }
`

const ProviPage = styled.main`
  background-image: url(${props => props.bgImgUrl});
  color: ${props => props.theme.primary};
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  img {
    height: 300px;
    width: 300px;
    margin-bottom: 0;
  }

  h1,
  p {
    text-shadow: 0px 0px 7px #999;
  }
`
