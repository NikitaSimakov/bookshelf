"use client";

import { DM_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.scss";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body data-theme="light">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
