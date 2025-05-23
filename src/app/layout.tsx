import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { getCssText } from "@/styles";

import { globalStyles } from "@/styles/global";
import { Header } from "@/components/header";
import { StitchesRegistry } from "@/lib/stitches-registry";
import { Container } from "./component";
import { CartProvider } from "@/contexts/cartContext";

globalStyles();

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ignite Shop',
    default: 'Ignite Shop',
  },
  description: 'Ignite Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={`${roboto.variable}`}>
        <StitchesRegistry>
          <Container>
            <CartProvider>
              <Header />
              {children}
            </CartProvider>
          </Container>
        </StitchesRegistry>
      </body>
    </html>
  );
}
