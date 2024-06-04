"use client"
import { ReactNode } from "react"
import {Toaster} from 'sonner'

export default function ReactTostify({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Toaster richColors />
    </div>
  )
}
