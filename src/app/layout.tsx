import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollLinkProvider } from "./ScrollContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: any) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://res.cloudinary.com/shmulky/image/upload/v1704442189/S.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of Samuel Woniowei, Frontend Developer"
        />
        <meta
          name="keywords"
          content="frontend developer, web developer, HTML, CSS, JavaScript, React, portfolio, nextjs"
        />
        <meta name="author" content="Samuel Woniowei" />
        <meta
          property="og:description"
          content="Explore the projects and skills of Samuel Woniowei, a frontend developer."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/shmulky/image/upload/v1704442189/S.png"
        />
        <meta property="og:url" content="http://samuelwoniowei.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Samuel Woniowei - Frontend Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the projects and skills of Samuel Woniowei, a frontend developer."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/shmulky/image/upload/v1704442189/S.png"
        />
        <title>Samuel Woniowei</title>
      </Head>
      <body className={inter.className}>
        <ScrollLinkProvider>{children}</ScrollLinkProvider>
      </body>
    </html>
  );
}
