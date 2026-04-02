import type { Metadata } from "next";
import { Montserrat, Pinyon_Script } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nahuel & Melanie - ¡Nos Casamos!",
  description: "Invitación oficial a la boda de Nahuel y Melanie. 1 de Mayo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${pinyonScript.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
