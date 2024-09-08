import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Woniowei",
  description: "Portfolio of Samuel Woniowei",
  keywords: "Samuel Woniowei, portfolio, developer", 
};

/* eslint-disable react/prop-types */
export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>{children}</body>
      </html>
    </Providers>
  );
}
