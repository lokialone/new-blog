import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      margin-top: 0.75rem;
      margin-bottom: 48px;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        display: flex;
        text-decoration: none;
        color: #3c4858;
        cursor: pointer;
        :hover {
          color: #17a2b8;
        }
      `}
    >
      <Image
        css={css`
          margin-top: 0;
          width: 218px;
          heiht: 160px;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
            0 4px 15px 0 rgba(0, 0, 0, 0.15);
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
      <div
        css={css`
          margin-left: 32px;
          font-sise: 12px;
          font-weight: 300;
        `}
      >
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
