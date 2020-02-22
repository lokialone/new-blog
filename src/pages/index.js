import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import FullScreenImage from '../components/FullScreenImage';
export default () => {
  const posts = usePosts();

  return (
    <Layout render={FullScreenImage}>
      <h2> read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post}></PostPreview>
      ))}
    </Layout>
  );
};
