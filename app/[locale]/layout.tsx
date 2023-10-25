import "../styles/globals.css";
import type { Metadata } from "next";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { notFound } from "next/navigation";

const locales = ["en", "tr"];

const Mont = localFont({
  src: [
    {
      path: "../fonts/Mont/Mont-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mont",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const isValidLocale = locales.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={params.locale} className={`${Mont.variable}`}>
      <body>
        <main>
          <NavBar  lang={params.locale} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}