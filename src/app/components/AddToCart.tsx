"use client"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../../../lib/sanity"
import { toast } from "sonner"

export type ProductCart = {
  name: string
  description: string
  price: number
  currency: string
  image?: any
  price_id: string
}
export default function AddToCart({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart()
  const product = {
    name,
    price,
    image: urlFor(image).url(),
    description,
    currency,
    price_id,
  }
  const success = () => {
    toast.success("product added")
  }
  
  return (
    <Button
      onClick={() => {
        addItem(product)
        handleCartClick()
        success()
      }}
      className="flex items-center gap-2 rounded-full p-5 font-medium capitalize text-black md:w-full"
    >
      add to cart
      <ShoppingCart />
    </Button>
  )
}
