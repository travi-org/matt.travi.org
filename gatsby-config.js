const polished = require('polished');
const brandRules = require('@travi/brand');

module.exports = {
  siteMetadata: {
    title: 'Matt Travi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto:300,400,500',
          'permanent marker:regular&text=Travi'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-2890413-10' }
    },
    {
      resolve: 'gatsby-plugin-webmention',
      options: {
        username: 'matt.travi.org',
        identity: {
          github: 'travi',
          twitter: 'mtravi'
        },
        mentions: true,
        pingbacks: true,
        domain: 'matt.travi.org'
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: { injectFirst: true }
      }
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Travi.org',
        short_name: 'Travi',
        description: 'Matt Travi',
        lang: 'en',
        start_url: '/',
        display: 'minimal-ui',
        theme_color: polished.rgb(brandRules.colors['brand-palette']['dark-red']),
        icon: 'node_modules/@travi/brand/dist/img/square-logo.svg'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        production: true,
        generateStatsFile: process.env.CYPRESS_INSTALL_BINARY !== 0,
        analyzerMode: 'static',
        openAnalyzer: false,
        disable: 'development' === process.env.NODE_ENV
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uses',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout')
        }
      }
    }
  ]
};
