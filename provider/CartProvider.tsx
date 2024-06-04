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
      cancelUrl="https://kampala-e-commerce.vercel.app/stripe/error"
      successUrl="https://kampala-e-commerce.vercel.app/stripe/success"
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CProvider> 
  )
}
