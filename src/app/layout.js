import { Inter } from "next/font/google";
import "./globals.css";
import PropTypes from 'prop-types'; 
import { Providers } from "../lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Woniowei",
  description: "Portfolio of Samuel Woniowei, Frontend Developer",
  keywords: "frontend developer, web developer, HTML, CSS, JavaScript, React, portfolio, nextjs",
  author: "Samuel Woniowei",
  openGraph: {
    title: "Samuel Woniowei - Frontend Developer Portfolio",
    description: "Explore the projects and skills of Samuel Woniowei, a frontend developer.",
    url: "http://samuelwoniowei.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/shmulky/image/upload/v1704442189/S.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Woniowei - Frontend Developer Portfolio",
    description: "Explore the projects and skills of Samuel Woniowei, a frontend developer.",
    images: ["https://res.cloudinary.com/shmulky/image/upload/v1704442189/S.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>{children}</body>
      </html>
    </Providers>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};
