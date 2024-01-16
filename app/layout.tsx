"use client";
// import Header from "@/components/Header";

import "./globals.scss";
import { SessionProvider } from "next-auth/react";

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
