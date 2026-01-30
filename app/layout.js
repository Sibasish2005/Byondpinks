import { Work_Sans } from "next/font/google"; // Using Work Sans as it's close to the reference clean sans-serif
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Beyond Pink | Contemporary Fashion",
  description: "Classy. Elegant. Sophisticated. Shop the latest trends in women's fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans text-foreground bg-background antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
