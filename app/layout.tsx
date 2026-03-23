import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solkinest.cl"),
  title: "Solkinest — Tratamientos Estéticos Corporales y Faciales",
  description:
    "Tratamientos estéticos corporales y faciales con aparatología de vanguardia y dermocosméticos profesionales. Resultados visibles desde la primera sesión.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solkinest — Tratamientos Estéticos Corporales y Faciales",
    description:
      "Tratamientos estéticos corporales y faciales con aparatología de vanguardia y dermocosméticos profesionales. Resultados visibles desde la primera sesión.",
    url: "https://www.solkinest.cl",
    siteName: "Solkinest",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo-solkinest.png",
        width: 800,
        height: 240,
        alt: "Solkinest — Kinesiología & Estética",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solkinest — Tratamientos Estéticos Corporales y Faciales",
    description:
      "Tratamientos estéticos corporales y faciales con aparatología de vanguardia. Resultados visibles desde la primera sesión.",
    images: ["/logo-solkinest.png"],
  },
  other: {
    "article:modified_time": "2026-03-23",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
