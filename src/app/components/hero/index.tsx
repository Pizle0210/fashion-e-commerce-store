import Image from "next/image"
import React from "react"
import { client, urlFor } from "../../../../lib/sanity"
import Link from "next/link"

async function getData() {
  const query = "*[_type=='heroImage'][0]"
  const data = await client.fetch(query)
  return data
}
export const dynamic = "force-dynamic"

export default async function Hero() {
  const data = await getData()
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:pb-8">
      {/* hero wrapper */}
      <div className="mb-8 flex flex-wrap items-center justify-between md:mb-16">
        {/* title and description */}
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
          <h1 className="mb-4 text-4xl capitalize text-black sm:text-5xl md:mb-8 md:text-6xl">
            <span className="!font-extrabold">
              <span className="text-yellow-400">Unleash Your Unique Style</span>{" "}
              with Our Curated Collection
            </span>
          </h1>
          <p className="!first-letter:font-semibold max-w-lg text-pretty rounded-lg bg-black/70 p-5 text-base leading-relaxed tracking-wide text-gray-100 first-letter:text-xl first-line:text-primary  md:text-lg">
            Discover the latest trends in fashion and elevate your wardrobe with
            our premium collection of clothing for men, women, and kids. From
            casual essentials to statement pieces, we've got you covered for
            every occasion.Shop now and unleash your unique style with Kampala.
          </p>
        </div>

        {/* hero images */}
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12  z-30 -ml-12 overflow-hidden rounded-lg bg-gray-200 shadow-lg md:left-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              width={500}
              height={500}
              quality={100}
              className="aspect-auto w-full object-cover  object-center "
              priority
              alt="hero-image1"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              height={500}
              width={500}
              quality={100}
              priority
              className="w-full object-cover object-center"
              alt="hero-image2"
            />
          </div>
        </div>
      </div>
      {/* hero wrapper ends */}

      {/* categories */}
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex h-10 w-64 divide-x overflow-hidden rounded border bg-black/80">
          <Link
            href={"/Men"}
            className="flex w-1/3 place-content-center items-center text-white transition-all duration-200 hover:bg-black/70 hover:font-light active:bg-gray-300"
          >
            Men
          </Link>
          <Link
            href={"/Women"}
            className="flex w-1/3 place-content-center items-center text-white transition-all duration-200 hover:bg-black/70 hover:font-light active:bg-gray-300"
          >
            Women
          </Link>
          <Link
            href={"/Kids"}
            className="flex w-1/3 place-content-center items-center text-white transition-all duration-200 hover:bg-black/70 hover:font-light active:bg-gray-300"
          >
            Kids
          </Link>
        </div>
      </div>
    </section>
  )
}
