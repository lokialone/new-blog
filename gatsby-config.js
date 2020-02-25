const sharp = require('sharp');

sharp.cache(false);
sharp.simd(false);

module.exports = {
  siteMetadata: {
    title: 'hello loki',
    description: 'a site build by loki',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
};
