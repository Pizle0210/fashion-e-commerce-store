import React, { ReactNode } from "react"

type ChildrenProps = {
  children: ReactNode
}

export default function StripeLayout({ children }: ChildrenProps) {
  return (
    <div className="mt-0 flex h-screen flex-col place-content-center items-center">
      {children}
    </div>
  )
}
