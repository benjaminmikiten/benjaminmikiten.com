import React from "react";
import { ThemeProvider, css } from "styled-components";
import { darken } from "polished";

const MATERIAL_OCEAN_COLORS = {
  primary: "#0f111a",
  secondary: "#00010a",
  accent: "#3a575c",
  darkGrey: "#3b4252",
  red: "#bf616a",
  green: "#a3be8c",
  yellow: "#ebcb8b",
  mediumBlue: "#81a1c1",
  purple: "#a48ead",
  brightBlue: "#88c0d0",
  lightGrey: "#e5e9f0",
  mediumGrey: "#4c566a",
};
const THEME = MATERIAL_OCEAN_COLORS;

const SEMANTIC_COLORS = {
  background: THEME.primary,
  bodyType: THEME.lightGrey,
  titleType: THEME.lightGrey,
  interactive: THEME.brightBlue,
  interactiveHover: darken(0.25, THEME.brightBlue),
  focus: THEME.green,
};
const FONTS = {
  mono: `'Fira Mono', monospace`,
  default: `'Fira Mono', monospace`,
};
const GRID = {
  pageMargin: 16,
};

const GRID_HELPERS = {
  LayoutContainer: css`
    width: 100%;
    margin: 0 auto;
    padding-left: ${GRID.pageMargin}px;
    padding-right: ${GRID.pageMargin}px;
    max-width: calc(768px + ${GRID.pageMargin * 2}px);
  `,
};

const TYPE = {
  link: css`
    /* text-decoration: none; */
    color: ${({ theme }) => theme.colors.interactive};
    cursor: pointer;
    transition: all 0.5s ease;
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.interactiveHover};
      }
    }
  `,
  body: css`
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.bodyType};
    font-size: 1rem;
    line-height: 2;
    font-weight: 400;
  `,
  extraLargeTitle: css`
    margin: 0;
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.titleType};
    font-size: 2.25rem;
    line-height: 1.2;
    font-weight: 700;
  `,
  largeTitle: css`
    margin: 0;
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.titleType};
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 700;
  `,
  mediumTitle: css`
    margin: 0;
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.titleType};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.2;
  `,
  smallTitle: css`
    margin: 0;
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.titleType};
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 700;
  `,
  extraSmallTitle: css`
    margin: 0;
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.titleType};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
  `,
};

export const ThemeSettings = {
  colors: { ...THEME, ...SEMANTIC_COLORS },
  fonts: FONTS,
  grid: { ...GRID, ...GRID_HELPERS },
  type: TYPE,
};
export const Theme = ({ children }) => <ThemeProvider theme={ThemeSettings}>{children}</ThemeProvider>;
