import ImageGallery from "@/app/components/image-gallery"
import { client } from "../../../../lib/sanity"
import { fullProductPage } from "../../../../types"
import { LucideTruck } from "lucide-react"
import AddToCart from "@/app/components/AddToCart"
import Checkout from "@/app/components/Checkout"

// type Params = {
//   params: { slug: string }
// }

const getData = async (slug: string) => {
  const query = `*[_type=='product' && slug.current=="${slug}"][0] {
  _id,
  price,
  name,
  description,
  images,
  "slug":slug.current,
  "category":category->name,
  price_id 
}`
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "Error fetching product"
    throw new Error(errMsg)
  }
}
export const dynamic = "force-dynamic"

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const data: fullProductPage = await getData(params.slug)
  return (
    <div className="bg-white @container">
      <div className="mx-auto h-screen max-w-screen-xl px-5 md:px-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <ImageGallery images={data.images} />
          {/* name and description */}
          <div className="space-y-4 md:py-8">
            <div className="mb-2 md:mb-5">
              <span>{data.category}</span>
              <h2 className="text-xl font-semibold @4xl:text-3xl">
                {data.name}
              </h2>
            </div>
            {/* price */}
            <div className="mb-3">
              <div className="mb-2 flex items-end gap-2">
                <span className="rounded bg-slate-600 p-2 text-sm font-medium  text-white md:text-xl">
                  ${data.price.toFixed(2)}
                </span>
                <span className="p-2 text-sm font-light text-red-500 line-through md:text-lg">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm font-light text-black md:text-lg">
                Excluding VAT & Shipping
              </span>
            </div>

            <div className="mb-5 flex items-center space-x-2">
              <LucideTruck color="green" />
              <span className="font-normal">3-7 working days shipping</span>
            </div>

            {/* description */}
            <div className="w-full text-[clamp(1rem,2vw,1.2rem)] text-slate-700">
              <p>{data.description}</p>
            </div>

            {/* add to cart */}
            <div className="flex items-center space-x-4 md:w-full md:flex-col md:space-x-0 md:space-y-4">
              <AddToCart
                name={data.name}
                description={data.description}
                currency="USD"
                image={data.images[0]}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Checkout
                name={data.name}
                description={data.description}
                price={data.price}
                currency="USD"
                image={data.images[0]}
                price_id={data.price_id}
                key={data._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
