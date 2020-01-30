import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
export default () => {
    const posts = usePosts();
    
    return (
    <Layout>
        <div>HI Frontend Masters!</div>
        <Link to="/about">to about &rarr;</Link>
        <h2> read my blog</h2>
        {
            posts.map(post => (
                <PostPreview key={post.slug} post={post}></PostPreview>
            ))
        }
    </Layout>
)}
