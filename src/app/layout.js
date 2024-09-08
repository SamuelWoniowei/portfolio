import { Inter } from "next/font/google";
import "./globals.css";
import PropTypes from 'prop-types'; 
import { Providers } from "../lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Woniowei",
  description: "Portfolio of Samuel Woniowei",
  keywords: "Samuel Woniowei, portfolio, developer", 
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
