import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mikael's Portfolio",
  description:
    "Mikael Bernardes' personal portfolio showcasing frontend development projects and a blog on advanced frontend programming concepts using JavaScript and TypeScript.",
  authors: {
    name: "Mikael Bernardes",
    url: "https://www.linkedin.com/in/bernardesmikael/",
  },
  openGraph: {
    type: "website",
    description:
      "Explore the portfolio of Mikael Bernardes, a frontend developer with expertise in JavaScript and TypeScript. Includes projects and a blog on advanced programming concepts.",
    locale: "pt-BR",
    title: "Mikael's Portfolio and Blog",
  },
  keywords: [
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Mikael Bernardes",
    "Programming Blog",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mikael Bernardes",
              url: "https://your-portfolio-url.com",
              sameAs: [
                "https://www.linkedin.com/in/bernardesmikael/",
                "https://github.com/mikaelbernardes",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Cartsys Software Ltda.",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
