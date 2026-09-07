import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Khant Min Htut | Full-Stack Developer",
  description:
    "Portfolio of Khant Min Htut — a Full-Stack Developer specializing in building modern, performant web applications.",
  keywords: ["Khant Min Htut", "Full-Stack Developer", "Portfolio", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Khant Min Htut" }],
  creator: "Khant Min Htut",
  publisher: "Khant Min Htut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/me.jpg",
  },
  openGraph: {
    title: "Khant Min Htut | Full-Stack Developer",
    description:
      "Portfolio of Khant Min Htut — a Full-Stack Developer specializing in building modern, performant web applications.",
    url: baseUrl,
    siteName: "Khant Min Htut Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Khant Min Htut",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khant Min Htut | Full-Stack Developer",
    description:
      "Portfolio of Khant Min Htut — a Full-Stack Developer specializing in building modern, performant web applications.",
    images: ["/me.jpg"],
    creator: "@khantminhtut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
