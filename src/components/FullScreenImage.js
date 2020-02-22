import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 100vh;
  width: 100wh;
  margin-top: -55px;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  display: flex;
  font-size: 28px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: white;
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "bg.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // console.log('image', image);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <div>Hello world ~</div>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
