# Next.js Games List and Details Project

This project demonstrates a Next.js application that lists games and provides detailed views of each game using Gamespot api. It showcases the benefits of combining client-side rendering for improved user experience with server-side rendering for enhanced search engine optimization (SEO).
Table of Contents

## Features

    Main Page: Displays a list of games rendered using Next.js API routes.
    Game Details Page: Server-side rendered (SSR) page that provides detailed information about a selected game.
    Client-Side Scrolling: Scroll pagination for efficient browsing and searching through the game list.
    SEO Optimization: Server-side rendering for individual game details pages for better SEO.

## Architecture

The project consists of two main pages:

    Main Page (/): This page is responsible for listing all available games. It uses client-side rendering with scroll pagination to load games as the user scrolls through the list. This approach enhances the user experience by allowing users to search and scroll through the list without reloading the entire page.

    Game Details Page (/games/[id]): When a user clicks on a game from the list, they are taken to this SSR page. The game details are fetched server-side, ensuring that the page is fully rendered and ready for search engines to crawl. This is beneficial for SEO as search engines can index the content more effectively.

```bash {"id":"01HNWHN1A7QCGECPZWRYTJMEG6"}
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
