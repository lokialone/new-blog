module.exports = {
    siteMetadata: {
        title: 'hello loki',
        description: 'a site build by lokis'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
                // gatsbyRemarkPlugins: ['gatsby-remark-images'],
                // plugins: ['gatsby-remark-images'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts'
            },
        },
    ],
}