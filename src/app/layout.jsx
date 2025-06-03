import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Notedly",
  description: "Notes Web created with Next.js",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Navbar/>
        <section className=" bg-blue-950 flex-grow">{children}</section>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
