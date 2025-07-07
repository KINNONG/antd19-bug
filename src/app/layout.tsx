import GlobalProviders from "@/components/GlobalProviders";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "后端求职训练营",
  description: "后端求职训练营，",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultTheme = cookieStore.get("theme")?.value || "dark";

  return (
    <html lang="zh-CN" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <GlobalProviders defaultTheme={defaultTheme}>{children}</GlobalProviders>
      </body>
    </html>
  );
}
