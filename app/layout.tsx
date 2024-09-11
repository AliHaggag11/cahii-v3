import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cashii",
  description: "Budgeting & Expense Tracking - The Smart Way!",
  openGraph: {
    title: "Cashii",
    description: "Budgeting & Expense Tracking - The Smart Way!",
    url: "https://cashii.vercel.app",
    siteName: "Cashii",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/618b2b6d-dc2b-4bb2-b25d-8f57fe9aabad.jpg?token=Xz01gONTR9d_kqlVdgHI-UHExJJiDtotTBJTpHJA3uI&height=500&width=500&expires=33261921899",
        width: 1200,
        height: 630,
        alt: "Preview image for Cashii",
      },
    ],
  },
};

export default function RootLayout<T extends React.ReactNode>({
  children,
}: {
  children: T;
}) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Cashii" />
        <meta
          property="og:description"
          content="Budgeting & Expense Tracking - The Smart Way!"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/618b2b6d-dc2b-4bb2-b25d-8f57fe9aabad.jpg?token=Xz01gONTR9d_kqlVdgHI-UHExJJiDtotTBJTpHJA3uI&height=500&width=500&expires=33261921899"
        />

        {/* PWA manifest and theme color */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* iOS PWA meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
