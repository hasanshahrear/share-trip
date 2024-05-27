import { Header, Sidebar } from "@/features";
import type { Metadata } from "next";
import { Murecho } from "next/font/google";
import "./globals.css";

const murecho = Murecho({ subsets: ["latin"], weight: ["100","200", "300", "400", "500", "600", "700","800","900"] });

export const metadata: Metadata = {
  title: "ShareTrip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${murecho.className} bg-[#EBF0F5]`}>
        <Header />
        <div className="w-[1112px] mx-auto flex gap-6">
          <Sidebar />
          {children}
        </div>
        </body>
    </html>
  );
}
