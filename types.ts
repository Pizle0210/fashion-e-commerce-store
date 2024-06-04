/**
 * Represents a user's profile information.
 */
export type Product = {
  _id: string
  name: string
  slug: string
  imageUrl: string
  category: string
  price: number
}

export type fullProductPage = {
  _id: string
  images:any 
  price: number
  name: string
  slug: string
  category: string
  description:string
  price_id:string
}
