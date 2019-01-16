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
    }
  ]
};
