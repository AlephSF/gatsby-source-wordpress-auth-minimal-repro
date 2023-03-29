/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://test.alephsf.com/graphql`,
        auth: {
          htaccess: {
            username: `superuser`,
            password: `IajdnsR(^*ip#5jghy`,
          },
        },
      },
    },
  ],
}
