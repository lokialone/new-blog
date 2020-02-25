import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            date

            image {
              sharp: childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    image: post.frontmatter.image,
    date: post.frontmatter.date,
  }));
};

export default usePosts;
