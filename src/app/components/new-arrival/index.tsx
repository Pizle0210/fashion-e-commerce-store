import Link from "next/link"
import { client } from "../../../../lib/sanity"
import { Product } from "../../../../types"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

async function getData() {
  const query = `*[_type=='product'][0..7]|order(_createdAt desc){
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

export default async function NewArrival() {
  const data: Product[] = await getData()
  return (
    <div className="bg-white @container">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900">
            New Arrivals
          </h2>
          <Link
            href={"/products"}
            className="group flex items-center gap-x-1 text-yellow-500 hover:text-yellow-500/60"
          >
            See All{" "}
            <span className="transform transition duration-75 ease-linear group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-4 mt-6 grid grid-cols-2 gap-x-6 gap-y-8 @5xl:mx-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
                  {product.name.slice(0,10)}...
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
