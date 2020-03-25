import React from 'react';
// import { Link } from 'gatsby';
// import Layout from '../components/layout';
// import usePosts from '../hooks/usePosts';
// import PostPreview from '../components/post-preview';
import { Router, Link } from '@reach/router';

export default () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> - <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router></Router>
    </>
  );
};
