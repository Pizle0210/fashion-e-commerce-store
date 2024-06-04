import React from "react"
import { client } from "../../../lib/sanity"
import { Product } from "../../../types"
import Image from "next/image"
import Link from "next/link"

const getData = async (category: string) => {
  const query = `*[_type=='product'&&category->name== "${category}"]{
  _id,
    price,
    name,
    "imageUrl":images[0].asset->url,
    "slug":slug.current,
    "category":category->name
}`
  try {
    const data = await client.fetch(query)
    console.log(data)
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "Error fetching product"
    throw new Error(errMsg)
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const data: Product[] = await getData(params.category)
  return (
    <div className="min-h-screen bg-white @container">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900">
            {params.category}
          </h2>
        </div>
      </div>

      <div className="mx-4 mt-6 grid grid-cols-2 gap-x-6 gap-y-8 @5xl:mx-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {data.length > 0 &&
          data.map((product) => (
            <Link
              href={`product/${product.slug}`}
              key={product._id}
              className="group group relative"
            >
              <div className="lg:h-70 mb-2 transform overflow-hidden rounded-md bg-gray-200 shadow-lg transition-all duration-150 ease-in-out hover:-translate-y-2 hover:shadow-neutral-500 group-hover:opacity-75">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={300}
                  width={300}
                  priority
                  className="box-border block aspect-square w-full object-cover object-center"
                />
              </div>

              <div className=" flex justify-between ">
                <div className="flex flex-col space-y-0">
                  <p className="ml-3 text-sm font-normal tracking-wide text-black group-hover:hidden @5xl:text-[1.02rem]">
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
    </div>
  )
}
