import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elim Sanctuary | RCCG Lagos Province 37",
    template: "%s | Elim Sanctuary",
  },
  description: "Welcome to Elim Sanctuary, a provincial headquarters for RCCG Lagos Province 37. Join us at 2 Ogbomosho Avenue, Akowonjo, Lagos for a life-transforming experience.",
  keywords: ["RCCG", "Elim Sanctuary", "Lagos Province 37", "Church in Akowonjo", "Christian Worship Lagos"],
  authors: [{ name: "Elim Sanctuary Media" }],
  openGraph: {
    title: "Elim Sanctuary - Your Place of Comfort",
    description: "Spreading God's love, grace, and salvation to mankind through our Lord Jesus Christ.",
    url: "https://rccg-elimsanctuary.org",  
    siteName: "Elim Sanctuary",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elim Sanctuary | RCCG",
    description: "Provincial Headquarters for Lagos Province 37.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", instrumentSans.variable, jetBrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}