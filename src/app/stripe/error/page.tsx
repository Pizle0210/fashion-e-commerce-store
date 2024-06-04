import { ShieldX } from "lucide-react"
import React from "react"

export default function StripeErrorPage() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <ShieldX color="red" size={60} />
      <p className="font-serif text-lg font-normal md:text-2xl">
        Payment was unsuccessful
      </p>
    </div>
  )
}
