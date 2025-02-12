import styled, { createGlobalStyle } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { rhythm } from 'themes/typography';

const MAX_WIDTH = 42;

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.primaryTextColor};
  }
  
  ::selection {
    background-color: ${({ theme }) => rgba(theme.primaryColor, 0.4)};
  }

  a {
    color: ${({ theme }) => theme.primaryTextColor};
    text-decoration: none;
    transition: all 100ms;
    border-bottom: 2px solid ${({ theme }) =>
      rgba(theme.primaryTextColor, 0.2)};
    
    &:hover,
    &:focus, 
    &:active {
      color: ${({ theme }) => theme.primaryColor};
      border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
      text-decoration: none;
    }
  }

  small {
    a, a:hover, a:focus, a:active {
      border-width: 1px;
    }
  }
  
  blockquote {
    padding: 1em;
    border-left: 2px solid ${({ theme }) => theme.primaryTextColor};
    color: ${({ theme }) => theme.primaryTextColor};
    background-color: ${({ theme }) => rgba(theme.primaryTextColor, 0.1)};
  }
  
  code {
    background-color: ${({ theme }) => theme.lightGrayColor} !important;
    color: ${({ theme }) => theme.primaryTextColor} !important;
  }

  figcaption.gatsby-resp-image-figcaption {
    text-align: center;
    font-size: 85%;
    margin: 4px 0;
  }

  /* PrismJS tweaks and line numbers */
  div.gatsby-highlight {
    margin-bottom: ${rhythm(1)};
  }
  
  .gatsby-highlight {
    font-size: 0.85rem;
    background-color: ${({ theme }) => theme.lightGrayColor};
    padding: 1em;
    overflow: auto;
    border: 1px solid ${({ theme }) => rgba(theme.primaryTextColor, 0.2)};
    border-radius: 4px;
  }
  
  .gatsby-highlight pre[class*="language-"] {
    background-color: ${({ theme }) => theme.lightGrayColor};
    padding: 0;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.5em;
    overflow: scroll;
  }
  
  code[class*="language-"] {
    font-size: 0.85rem;
    text-shadow: none !important;
  }

  .gatsby-highlight .token {
    background: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Main = styled.div`
  margin: 2rem 0;
`;
