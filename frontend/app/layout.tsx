import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "../components/NavMenu";
import { UserProvider } from "../utils/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduAlly",
  description: "AI-powered education assistant",
};

async function fetchUserName() {
  // Replace this with the actual database query
  return "Professor Name";
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userName = await fetchUserName();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <UserProvider userName={userName}>
          <NavMenu />
          <main className="main-content">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
