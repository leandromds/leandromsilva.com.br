import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'

import Icon from '../assets/logo.svg'
import Bg from '../assets/redox_01.png'

export default () => {
  const intl = useIntl()
  console.log(Icon)

  return (
    <ProviPage>
      <img src={Icon} alt='Lenadro Silva web developer' />
      <h1>{intl.formatMessage({ id: 'ProvisionalPage.title' })}</h1>
    </ProviPage>
  )
}

const ProviPage = styled.main`
  background-image: url(${Bg});
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
