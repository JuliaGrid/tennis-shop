import { Footer } from "@/containers/Footer/Footer";
import "./global.css";
import { Header } from "@/containers/Header/Header";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/providers/AuthProvider";
import { cookies } from "next/headers";
import { UserProvider } from "@/providers/UserProvider";
import { getUser } from "@/services/get-user";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "Buy tennis goods",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const { data } = await getUser();

  return (
    <UserProvider user={data?.user}>
      <html lang="en" className={`${openSans.variable}`}>
        <body>
          <NextTopLoader showSpinner={false} />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </UserProvider>
  );
}
