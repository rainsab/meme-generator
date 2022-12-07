# Meme Generator

Web application for making custom meme which I made during my React Scrimba course and then I added some my own features. Whole project is made using React, gets meme images from API and styling is made by Bootstrap and some custom CSS.

See in action: https://rainsab-meme-generator.surge.sh/

Includes:

-   **React 18**: free and open-source front-end JavaScript library for building user interfaces based on UI components
-   **Bootstrap 5**: build responsive, mobile-first projects on the web with the world's most popular front-end component library
-   **Nano ID**: tiny, secure, URL-friendly, unique string ID generator for JavaScript
-   **Vite 3**: provides an extremely fast development environment and bundles your code for production
-   **Surge.sh**: deploy static websites easily and for free

## First time installation

### Install all packages from `package.json` locally (Needs latest [node.js](https://nodejs.org/))

```shell
npm ci
```

## Development

Develop with using Vite: https://vitejs.dev/

```shell
npm create vite@latest
```

### Then follow the prompts!

```shell
npm run dev
```

And see the result on `http://localhost:5137/`

## Build

To build everything once for production deploy (in `/dist/` folder)

```shell
npm run build
```

## Static files (JavaScript, images, …)

Folders and files from `/src/static/` are simply copied directly to `/dist/` folder.

### Bootstrap

You can use all basics of Bootstrap like components, forms or layouts.

### Deployment

Upload everything in `/dist/` folder to the server.

#### Surge.sh

I use surge.sh for this project.

1. You need surge account. If you don’t have one, then run surge client with `npx surge` in `/dist` folder to create it.
1. From now on run `npm run deploy` whenever you want to publish a new version.

If you want acces to https://rainsab-meme-generator.surge.sh/, fell free to can contact me.

