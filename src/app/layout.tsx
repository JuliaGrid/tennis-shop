import { Footer } from "@/containers/Footer/Footer";
import "./global.css";
import { Header } from "@/containers/Header/Header";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "Buy tennis goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>
        <NextTopLoader showSpinner={false} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
