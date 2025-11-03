import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Garcia Carl Aaron | Portfolio",
  description: "Software Developer Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#240238] text-gray-900 font-sans">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl mt-10 shadow-lg overflow-hidden">
          <Navbar />
          <main className="px-8 md:px-16 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
