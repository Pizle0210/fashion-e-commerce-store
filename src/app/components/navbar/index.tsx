"use client"
import Link from "next/link"
import React from "react"
import { links } from "../../../../lib/data"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

export default function Navbar() {
  const pathname = usePathname()
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-10 border-b @container">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-8 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold @2xl:text-3xl">
            Kampala<span className="text-primary">Store</span>
          </h1>
        </Link>

        <nav className="hidden items-center gap-8 @5xl:flex 2xl:ml-16">
          {links.map((link) => (
            <div key={link.id}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-pretty  text-lg font-bold text-primary"
                >
                  {link.title}
                </Link>
              ) : (
                <>
                  <Link
                    href={link.href}
                    className="text-pretty text-lg font-normal text-gray-600 transition-all duration-150 hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center divide-x sm:border-l">
          <Button
            onClick={()=>handleCartClick()}
            variant={"outline"}
            className="flex h-12 w-12 flex-col items-center gap-y-1.5 rounded-none sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <ShoppingCart className="h-8 w-8 text-primary @2xl:h-11 @2xl:w-11" />
            <span className="hidden text-xs font-semibold text-black/70 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
