/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Passo Brasil • Sneaker Pro Azul",
  description:
    "Sneakers colecionáveis brasileiros com tecnologia AeroGel e design premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
