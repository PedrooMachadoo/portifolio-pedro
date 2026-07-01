import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://pedroantonio.design"),
  title: "Pedro Antônio · Product Designer (UX/UI)",
  description:
    "Product Designer em Recife. Desenho produtos digitais do discovery ao delivery, transformando fluxos complexos em experiências claras e orientadas à ação.",
  keywords: [
    "Product Designer",
    "UX/UI",
    "Recife",
    "Design de Produto",
    "Pedro Antônio",
  ],
  authors: [{ name: "Pedro Antônio" }],
  openGraph: {
    title: "Pedro Antônio · Product Designer (UX/UI)",
    description:
      "Desenho produtos digitais do discovery ao delivery, transformando fluxos complexos em experiências claras.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Antônio · Product Designer",
    description: "Product Designer (UX/UI) em Recife.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#05070e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
    >
      <body className="grain font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
