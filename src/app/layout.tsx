/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BBNH HVAC Solutions",
  description:
    "We specialize in providing top-tier supervision and design services in the HVAC industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
        <link rel="shortcut icon" href="/logo/logo.svg" type="image/svg" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
