import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { twMerge } from "tailwind-merge"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import ReactQueryProvider from "../../provider/ReactQueryProvider"
import CartProvider from "../../provider/CartProvider"
import ShoppingCart from "./components/shopping-cart"
import ReactTostify from "../../provider/ReactToastify"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={twMerge(
          `flex min-h-svh flex-col justify-between md:min-h-screen`,
          roboto.className
        )}
      >
        {/* <ReactQueryProvider> */}
        <ReactTostify>
          <CartProvider>
            <ShoppingCart />
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </ReactTostify>
        <Toaster />
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  )
}
