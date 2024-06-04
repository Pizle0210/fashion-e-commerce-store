import React from "react"
import { client } from "../../../lib/sanity"
import { Product } from "../../../types"
import Image from "next/image"
import Link from "next/link"

async function getData() {
  const query = `*[_type=='product']{
  _id,
  price,
  name,
  "slug":slug.current,
  "category":category->name,
    "imageUrl":images[0].asset->url
}`
  const data = await client.fetch(query)
  return data
}

export const dynamic = "force-dynamic"

export default async function AllProducts() {
  const data: Product[] = await getData()

  return (
    <>
      <div className="mx-4 mt-6 grid grid-cols-2 gap-x-6 gap-y-8 @5xl:mx-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <Link
            href={`product/${product.slug}`}
            key={product._id}
            className="group relative"
          >
            <div className="mb-2 aspect-square transform overflow-hidden bg-gray-200 shadow-lg transition-all duration-150 ease-in-out hover:-translate-y-2 hover:shadow-neutral-500 group-hover:opacity-75">
              <Image
                src={product.imageUrl}
                alt={product.name}
                height={300}
                width={300}
                priority
                className="box-border block aspect-square min-h-[185.444px] w-full bg-repeat object-cover object-center"
              />
            </div>

            <div className=" flex justify-between">
              <div className="flex flex-col space-y-0">
                <p className="ml-3 text-sm font-normal tracking-wide text-black @5xl:text-[1.02rem]">
                  {product.name}
                </p>
                <p className="ml-3 text-sm font-semibold">${product.price}</p>
              </div>
              <p className="mr-2  text-sm font-semibold text-gray-400">
                {product.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
