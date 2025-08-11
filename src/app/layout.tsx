import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin", "cyrillic", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Lo2ta store ",
  description: "سوق كبير ليبع منتجات ب 100 جنيه فقط فى مدينه المنيا ",
  openGraph: {
    title: "Lo2ta store",
    description: "سوق كبير ليبع منتجات ب 100 جنيه فقط فى مدينه المنيا ",
    url: "lo2taStore.com",
    siteName: "لقطه استور ",
    images: [{ url: "../assets/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={elMessiri.className}>{children}</body>
    </html>
  );
}
