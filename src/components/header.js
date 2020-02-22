import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { throttle } from 'lodash';
import useScrollAtTop from '../hooks/useScrollAtTop';
const NavLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  height: 40px;
  text-decoration: none;
  margin-left: 12px;
  &.current-page {
    border-bottom: 2px solid white;
  }
  &:active {
    color: white;
  }

  &:last-of-type {
    margin-right: 12px;
  }
`;

const HeaderStyle = styled.div`
  padding: 12px 16px;
  background: ${props => props.background};
  color: white;
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
  transition: all 1s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const Header = () => {
  const isAtTop = useScrollAtTop(true);
  return (
    <HeaderStyle background={isAtTop ? 'transparent' : '#2f4154'}>
      <div
        css={css`
          color: white;
          font-size: 1.25rem;
          text-decoration: none;
          margin-left: 12px;
          display: inline-block;
        `}
      >
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
    </HeaderStyle>
  );
};

export default Header;
