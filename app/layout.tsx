"use client";
import Header from "@/components/Header";

import "./globals.scss";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Bookshelf",
//   description: "Here we are reading",
//   icons: {
//     icon: [
//       {
//         media: "(prefers-color-scheme: light)",
//         url: "/favicon.ico",
//         href: "/favicon.ico",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {/* <Header /> */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
