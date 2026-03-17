import { Product } from '@/types/product'

// Mock data - Em produção, isso viria de uma API ou banco de dados
const products: Product[] = [
  {
    id: '1',
    name: 'Anel Solitário Dourado',
    description: 'Elegante anel solitário folheado a ouro 18k com zircônia cúbica',
    price: 89.90,
    originalPrice: 129.90,
    discount: 31,
    images: [
      '/placeholder-bn2mi.png',
      '/gold-ring-detail.png',
    ],
    category: 'Anéis',
    categoryId: 'aneis',
    material: 'Ouro 18k',
    color: 'Dourado',
    size: 'Ajustável',
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: '2',
    name: 'Brincos Gota Pérola',
    description: 'Brincos delicados em formato de gota com pérolas sintéticas',
    price: 65.90,
    images: [
      '/pearl-drop-earrings.png',
      '/placeholder-ybl2k.png',
    ],
    category: 'Brincos',
    categoryId: 'brincos',
    material: 'Prata 925',
    color: 'Prateado',
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: '3',
    name: 'Colar Corrente Veneziana',
    description: 'Colar em corrente veneziana folheado a ouro com pingente coração',
    price: 125.90,
    images: [
      '/gold-venetian-chain.png',
      '/placeholder-q2ysy.png',
    ],
    category: 'Colares',
    categoryId: 'colares',
    material: 'Ouro 18k',
    color: 'Dourado',
    inStock: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 32
  },
  {
    id: '4',
    name: 'Pulseira Elos Delicados',
    description: 'Pulseira feminina com elos delicados e fecho seguro',
    price: 78.90,
    originalPrice: 98.90,
    discount: 20,
    images: [
      '/delicate-chain-bracelet.png',
      '/gold-bracelet-detail.png',
    ],
    category: 'Pulseiras',
    categoryId: 'pulseiras',
    material: 'Ouro 18k',
    color: 'Dourado',
    inStock: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 15
  }
]

export async function getAllProducts(): Promise<Product[]> {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 100))
  return products
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.filter(product => product.isFeatured)
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.find(product => product.id === id) || null
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.filter(product => product.categoryId === categoryId)
}

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )
}
