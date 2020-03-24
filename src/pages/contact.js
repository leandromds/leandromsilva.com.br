import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

export default () => {
  const intl = useIntl()

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'contact.title' })}</h1>
      <p>{intl.formatMessage({ id: 'contact.description' })}</p>
    </div>
  )
}
