import Navbar from "@/components/Navbar";
import Cursor from "@/components/ui/Cursor";
import { CursorProvider } from "./CursorContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DirtyLine = localFont({
  src: "./fonts/DirtyLine.woff2",
  variable: "--font-dirty-line",
});

export const metadata: Metadata = {
  title: "Loom",
  description:
    "Loom is a modern platform for creative professionals, connecting freelancers and clients. Discover inspiring projects, showcase your work, and unlock new opportunities. Join us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DirtyLine.variable} antialiased`}>
        <CursorProvider>
          <Cursor />
          <Navbar />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
