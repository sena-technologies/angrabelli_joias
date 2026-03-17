export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  category: string
  categoryId: string
  material: string
  color: string
  size?: string
  inStock: boolean
  isNew?: boolean
  isFeatured?: boolean
  rating?: number
  reviewCount?: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}
