import type { Metadata } from "next";
import StartBackGround from "./aside";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative !scroll-smooth">{children}</div>;
}