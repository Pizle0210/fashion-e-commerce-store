import { Button } from "@/components/ui/button"
import { CheckCheck, CheckIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function StripeSuccessPage() {
  return (
    <>
      <div className="flex place-content-center items-center">
        <CheckCheck color="green" className="h-10 w-10 md:h-14 md:w-14" />
      </div>
      <div className="text-center space-y-5">
        <p className="text-lg md:text-2xl">payment successful</p>
        <p className="text-base">Thank you for patronizing us</p>
        <Button asChild>
          <Link href={"/"} className="capitalize">go back</Link>
        </Button>
      </div>
    </>
  )
}
