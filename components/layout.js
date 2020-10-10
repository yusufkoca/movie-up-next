import Head from "next/head";
import AppBar from "./AppBar";

export const siteTitle = "Movie Up";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Movie search and add to favorite app"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AppBar></AppBar>
      <main>{children}</main>
    </div>
  );
}
