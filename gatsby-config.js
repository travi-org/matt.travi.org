module.exports = {
  siteMetadata: {
    title: 'Matt Travi'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Permanent Marker:400'
        ]
      }
    }
  ]
};
