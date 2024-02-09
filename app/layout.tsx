import Providers from "@/components/layout/providers";
import "@uploadthing/react/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <Providers>
          <Toaster richColors expand={true} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
