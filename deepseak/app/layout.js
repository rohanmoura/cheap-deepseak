import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inder",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cheap DeepSpeak",
  description: "Cheap DeepSpeak – Affordable Deepfake Alternative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
