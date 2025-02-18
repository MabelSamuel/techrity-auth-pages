import type { Metadata } from "next";
import { Adamina, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SideFrame from "@/app/components/SideFrame";

const adamina = Adamina({
  weight: "400",
  variable: "--font-adamina",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

// const nowAlt = localFont({
//   src: "fonts/NowAlt-Regular.otf",
// });

// const helvetica = localFont({
//   src: "fonts/Helvetica.ttf",
// });

export const metadata: Metadata = {
  title: "Techrity Sign up",
  description: "Techrity Sign up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${adamina.variable} ${raleway.variable} antialiased`}>
        <div className="mx-auto max-w-[1920px] min-h-screen grid grid-cols-2">
          <SideFrame />
          <main className="bg-secondary">{children}</main>
        </div>
      </body>
    </html>
  );
}
