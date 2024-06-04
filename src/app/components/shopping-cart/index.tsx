"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Trash2Icon } from "lucide-react"
import Image from "next/image"
import React from "react"
import { useShoppingCart } from "use-shopping-cart"

export default function ShoppingCart() {
  const {
    cartCount,
    shouldDisplayCart,
    cartDetails,
    removeItem,
    handleCartClick,
    redirectToCheckout,
    totalPrice,
  } = useShoppingCart()

  async function handleCheckout(e: any) {
    e.preventDefault()
    try {
      const result = await redirectToCheckout()
      if (result?.error) {
      }
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Error checking out"
        console.log(errMsg);
      throw new Error(errMsg)
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent side={"right"} className="w-[80vw] rounded sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>
            <p>Selected Items</p>
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="my-6 divide-y divide-gray-300">
              {cartCount === 0 ? (
                <p className="text-[clamp(1.3rem,1.8vw,1.65rem)] text-gray-700">
                  No Item In Cart
                </p>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="ml-3 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={product.image as string}
                          alt="product image"
                          width={200}
                          height={200}
                          priority
                          quality={80}
                          className="h-full w-full"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col space-y-2">
                        <div className="space-y-1">
                          <div className="flex justify-between text-base font-medium text-gray-800">
                            <h3>{product?.name}</h3>
                            <p>${product?.price}</p>
                          </div>
                          <div className="line-clamp-2 text-gray-500">
                            {product?.description}
                          </div>
                        </div>
                        {/* quantity */}
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p>Qty:{product.quantity}</p>
                          <button
                            type="button"
                            className="hover:opacity-50"
                            onClick={() => removeItem(product.id)}
                          >
                            <Trash2Icon color="red" size={20} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          {/* checkout */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{totalPrice?.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm font-light text-gray-600">
              Shipping and taxes are calculated at checkout
            </p>
            <div className="mt-4">
              <Button
                onClick={handleCheckout}
                className="w-full font-extrabold capitalize text-black"
              >
                checkout
              </Button>
            </div>
            <div className="mt-4">
              <Button
                onClick={() => handleCartClick()}
                className="w-full bg-gray-800 font-normal capitalize text-white hover:bg-gray-800/70 "
              >
                continue shopping
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
