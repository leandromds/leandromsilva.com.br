/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'blog'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/images/uploads`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#142B41',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/assets/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-90549914-1'
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.js']
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.leandromsilva.com.br'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1282,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/assets/'
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['pt-br', 'en'],
        // language file path
        defaultLanguage: 'pt-br',
        // option to redirect to `/ko` when connecting `/`
        redirect: true
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Leandro Silva',
        short_name: 'LeandroMDS',
        start_url: '/',
        background_color: '#0C1E2C',
        theme_color: '#FFF',
        display: 'standalone',
        icon: 'src/assets/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
