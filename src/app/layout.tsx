import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Manrope, Space_Grotesk } from "next/font/google"

/** Fonts -> CSS variables used in globals.css:
 *  --font-sans, --font-display
 */
const fontSans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nicorgroup-site.vercel.app"),
  title: "НИКОР — сантехнические работы в СПб и области",
  description:
    "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
  applicationName: "НИКОР-ГРУПП",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "НИКОР — сантехнические работы в СПб и области",
    description:
      "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
    siteName: "НИКОР-ГРУПП",
  },
  twitter: {
    card: "summary_large_image",
    title: "НИКОР — сантехнические работы в СПб и области",
    description:
      "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={[
        "scroll-smooth",
        "antialiased",
        fontSans.variable,
        fontDisplay.variable,
      ].join(" ")}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased">
        <Header />

        <main className="relative">
          {/* Global premium background polish across all pages */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Base */}
            <div className="absolute inset-0 bg-[rgb(var(--bg))]" />

            {/* Soft multi-radial brand glow */}
            <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_8%,rgba(20,184,166,0.10),transparent_62%),radial-gradient(1000px_520px_at_86%_10%,rgba(59,130,246,0.10),transparent_62%),radial-gradient(900px_520px_at_45%_92%,rgba(244,63,94,0.07),transparent_65%)]" />

            {/* Very subtle grid */}
            <div className="absolute inset-0 opacity-[0.032] [background-image:linear-gradient(to_right,rgba(0,0,0,.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.9)_1px,transparent_1px)] [background-size:84px_84px]" />

            {/* Edge vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(0,0,0,0.07)_100%)]" />
          </div>

          {children}

          {/* Spacer so fixed mobile bar never overlaps content */}
          <div className="h-[104px] md:hidden" />
        </main>

        <Footer />
      </body>
    </html>
  )
}
