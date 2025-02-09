require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Pawcar',
    author: "Steven Nebo"
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    process.env.DISABLE_GOOGLE_FONTS_PREFETCH !== "true"
      ? {
          resolve: `gatsby-plugin-prefetch-google-fonts`,
          options: {
            fonts: [
              {
                family: `Poppins`,
                variants: [`400`, `500`, `700`],
              }
            ]
          },
        }
      : null,
  ].filter(Boolean),
}
