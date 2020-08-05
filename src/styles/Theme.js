import React from "react";
import { ThemeProvider, css } from "styled-components";

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
  headerType: THEME.purple,
  interactive: THEME.red,
};
const FONTS = {
  mono: `'Fira Mono', monospace`,
  default: `'Fira Mono', monospace`,
};
const GRID = {
  pageMargin: 32,
};
const GRID_HELPERS = {
  LayoutContainer: css`
    width: 100%;
    padding-left: ${GRID.pageMargin}px;
    padding-right: ${GRID.pageMargin}px;
    max-width: 1200px;
  `,
};

const TYPE = {
  body: css`
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.bodyType};
    font-size: 1rem;
    font-weight: 400;
  `,
  largeHeader: css`
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.headerType};
    font-size: 1.5rem;
    font-weight: 700;
  `,
  mediumHeader: css`
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.headerType};
    font-weight: 700;
    font-size: 1.2rem;
  `,
  smallHeader: css`
    font-family: ${FONTS.mono};
    color: ${SEMANTIC_COLORS.headerType};
    font-size: 1rem;
    font-weight: 700;
  `,
};

export const ThemeSettings = {
  colors: { ...THEME, ...SEMANTIC_COLORS },
  fonts: FONTS,
  grid: { ...GRID, ...GRID_HELPERS },
  type: TYPE,
};
export const Theme = ({ children }) => <ThemeProvider theme={ThemeSettings}>{children}</ThemeProvider>;
