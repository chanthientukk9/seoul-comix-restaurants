import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seoul Comix Restaurants App",
  description: "This is a restaurants listing app which you can like or unlinke restaurant. It is a nextjs + prisma + tRPC project",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
