import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Danish Sabeel - Portfolio",
    template: "%s | Danish Sabeel"
  },
  description: "Assistant PM specializing in Facades & Curtain Walls. Explore my professional journey through interactive experience cards.",
  keywords: ["portfolio", "project management", "facades", "curtain walls", "construction", "engineering"],
  authors: [{ name: "Danish Sabeel" }],
  creator: "Danish Sabeel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://danish-sabeel-portfolio.vercel.app",
    title: "Danish Sabeel - Portfolio",
    description: "Assistant PM specializing in Facades & Curtain Walls. Explore my professional journey through interactive experience cards.",
    siteName: "Danish Sabeel Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://danish-sabeel-portfolio.vercel.app"}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Danish Sabeel - Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Sabeel - Portfolio",
    description: "Assistant PM specializing in Facades & Curtain Walls. Explore my professional journey through interactive experience cards.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://danish-sabeel-portfolio.vercel.app"}/opengraph-image`]
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
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
