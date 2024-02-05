import { Inter } from "next/font/google";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-7xl mx-auto"}>{children}</body>
    </html>
  );
}
