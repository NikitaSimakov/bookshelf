"use client";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
// import Header from "@/components/Header";

import "./globals.scss";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body data-theme="light">
        <SessionProvider>
          {/* <Header /> */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
