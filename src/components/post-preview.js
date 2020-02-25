import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link to={post.slug}>
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
      <div>
        <h3>{post.title}</h3>
        <div>{post.excerpt}</div>
      </div>
    </Link>
  </article>
);

PostPreview.Container = styled.div`
  border-radius: 4px;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;

export default PostPreview;
