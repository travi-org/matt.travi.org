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
      resolve: 'gatsby-plugin-favicon',
      options: {theme_color: '#c80000'}
    }
  ]
};
