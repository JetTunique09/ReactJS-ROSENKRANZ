/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `eval-react`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet" ,"gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};