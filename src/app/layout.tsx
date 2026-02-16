import "./global.css";
import { Header } from "@/container/header";

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
