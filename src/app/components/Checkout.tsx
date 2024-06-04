"use client"
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "./../../../lib/sanity"
import { ProductCart } from "./AddToCart"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"

export default function Checkout({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart()

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    price: price,
    image: urlFor(image).url(),
    description: description,
    currency: currency,
    price_id: price_id,
  
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product.price_id)
      }}
      className="flex items-center gap-2 rounded-full bg-black/90 p-5 font-medium capitalize text-white hover:bg-black/70 hover:text-white md:w-full"
    >
      checkout Now
      <MdOutlineShoppingCartCheckout size={24} color="white" />
    </Button>
  )
}
