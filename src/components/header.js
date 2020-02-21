import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  height: 40px;
  text-decoration: none;
  margin-left: 12px;
  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 12px;
  }
`;
// <div css={
//   css`
//     widht: 100%;
//     height: 60px;
//     background: transparent;
//   `
// }></div>
const Header = () => (
  <header
    css={css`
      padding: 12px 16px;
      background: transparent;
      color: white;
      font-family: Roboto,sans-serif;
      display: flex;
      justify-content: space-between;
      position: sticky;
      width: 100%;
      top: 0;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    `}
  >
    <div 
      css={css`
        color: #222;
        font-size: 1.25rem;
        text-decoration: none;
        margin-left: 12px;
        display: inline-block;
      `}>
      谏山
    </div>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        首页
      </NavLink>
      <NavLink to="/achive/" activeClassName="current-page">
        归档
      </NavLink>
      <NavLink to="/tag" activeClassName="current-page">
        标签
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        关于
      </NavLink>
    </nav>
  </header>
);

export default Header;
