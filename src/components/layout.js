import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
const Layout = ({ render, children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */

          html,
          body {
            margin: 0;
            color: #555;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h3 {
            font-size: 24px;
            font-weight: bold;
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Header />
      {render && render()}
      <main
        css={css`
          margin: 2rem 10%;
          box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19) !important;
          border-radius: 8px;
          padding: 48px 32px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
