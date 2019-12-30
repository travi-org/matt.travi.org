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
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {trackingId: 'UA-2890413-10'}
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
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Travi.org',
        short_name: 'Travi',
        description: 'Matt Travi',
        lang: 'en',
        start_url: '/',
        display: 'minimal-ui',
        theme_color: brandRules.colors['brand-palette']['dark-red'],
        icon: 'node_modules/@travi/brand/dist/img/square-logo.svg'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        generateStatsFile: true,
        analyzerMode: 'static',
        openAnalyzer: false,
        disable: 'development' === process.env.NODE_ENV
      }
    }
  ]
};
