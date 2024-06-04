"use client"
import Image from "next/image"
import React, { useState } from "react"
import { urlFor } from "../../../../lib/sanity"
import { Star } from "lucide-react"

type IappProps = {
  images: any
}

export default function ImageGallery({ images }: IappProps) {
  const [focusedImage, setFocusedImage] = useState(images[0])

  const handleFocusedImage = (image: any) => {
    setFocusedImage(image)
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex flex-row gap-3 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100 ">
            <Image
              src={urlFor(image).url()}
              height={200}
              width={200}
              priority
              alt="product-image"
              className="h-full w-full cursor-pointer object-cover object-center "
              onMouseEnter={() => handleFocusedImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(focusedImage).url()}
          height={700}
          width={700}
          alt="big-image"
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-widest text-white">
          sale
        </span>
        <span className="absolute left-5 top-6 flex items-center gap-2 rounded-2xl bg-white p-1 px-3 text-xs capitalize tracking-widest text-black sm:text-sm">
          <Star
            className="text-black max-sm:h-4 max-sm:w-4"
            fill="true"
            color="black"
          />
          Highly Rated
        </span>
      </div>
    </div>
  )
}
