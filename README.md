# BenjaminMikiten.com

This is my hastily-prepared personal website begun the day I was laid off. It's a Next.js site that talks to Contentful as a CMS and is hosted by Netlify.

## Up and Running

`yarn install`
`yarn dev`

## Static Generation

`yarn build`

This site uses static generation for all of the pages that come from the CMS. There is a `[slug].js` file for each page that needs to be created at build time that uses `getStaticPaths` and `getStaticProps`.

The API for interacting with Contentful is located in `lib/api.js`.

## Styling

This site uses `styled-components`. All the major style variables are in `style/Theme.js`. That includes a number of type styles, colors, and grid settings.

## Helpers

`getLocalContent.js`: As a post-install task, I query the CMS to get any content type that I want to keep a local version of and not have to pass through a pages' props using `getStaticProps`, like social items. These are _just_ unweildy enough I wanted to manage them in the CMS, but didn't want to import them on every page. This was a nice in-between solution.

## CMS

Most content is managed by the CMS, and there's a webhook in place to trigger a rebuild whenever that content changes so that the statically-generated version stays up-to-date.
