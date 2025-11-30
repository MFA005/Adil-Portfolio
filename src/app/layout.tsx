import type { Metadata } from "next";
import { Bebas_Neue, Roboto, Roboto_Condensed} from "next/font/google";
import local from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

const norwester = local({
  src: '../fonts/norwester.otf', 
  variable: '--font-norwester'
})

const neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable:'--font-neue'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','600','300'],
  variable:'--font-roboto'
});

const robotocnd = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400','500','600','300'],
  variable:'--font-robotocnd'
});


export const metadata: Metadata = {
  title: "Abdulrahman Adil | Portfolio",
  description: "Hello! I'm Abdulrahman Adil, a Mechatronics Engineer passionate about robotics, embedded systems, and software development. Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${norwester.variable} ${neue.variable} ${roboto.variable} ${robotocnd.variable} antialiased`}
      >
        <ParticlesBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
