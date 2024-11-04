import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Toaster } from "@/components/atoms/Toast/Toast";
import { Navbar } from "@/components/organisms/Navbar/Navbar";
import { ReactQueryProvider } from "../providers/react-query";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Talentify",
  description: "Transforma tu talento en éxito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} min-h-screen w-full bg-white font-onest antialiased`}
      >
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Toaster richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
