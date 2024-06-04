"use client"
import React from "react"
import { CartProvider as CProvider } from "use-shopping-cart"
export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      billingAddressCollection={false}
      currency="USD"
      cancelUrl="http://localhost:3000/stripe/error"
      successUrl="http://localhost:3000/stripe/success"
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CProvider>
  )
}
