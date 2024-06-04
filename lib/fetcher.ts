import { client } from "./sanity"

const getProductPageData = async (slug: string) => {
  const query = `*[_type=='product' && slug.current=="${slug}"][0]{
  _id,
    price,
    name,
    description,
    images,
    "slug":slug.current,
    "category":category->name 
}`
  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "Error fetching product"
    throw new Error(errMsg)
  }
}

