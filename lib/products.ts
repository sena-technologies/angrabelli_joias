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
  },
  {
    id: '5',
    name: 'Anel Zircônia Dupla Prata',
    description: 'Anel duplo com zircônia cúbica em prata folheada, elegante e moderno',
    price: 59.90,
    images: [
      '/placeholder-bn2mi.png',
    ],
    category: 'Anéis',
    categoryId: 'aneis',
    material: 'Prata 925',
    color: 'Prateado',
    size: 'Ajustável',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 12
  },
  {
    id: '6',
    name: 'Brincos Buquê de Flores',
    description: 'Brincos em formato de flor com cristais coloridos',
    price: 79.90,
    originalPrice: 99.90,
    discount: 20,
    images: [
      '/placeholder-ybl2k.png',
    ],
    category: 'Brincos',
    categoryId: 'brincos',
    material: 'Ouro 18k',
    color: 'Dourado',
    inStock: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 22
  },
  {
    id: '7',
    name: 'Colar Minimalista Geométrico',
    description: 'Colar com pingente geométrico em ouro branco, perfeito para look casual',
    price: 95.90,
    images: [
      '/placeholder-q2ysy.png',
    ],
    category: 'Colares',
    categoryId: 'colares',
    material: 'Prata 925',
    color: 'Branco',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 28
  },
  {
    id: '8',
    name: 'Anel de Esmeralda Simulada',
    description: 'Anel elegante com pedra de esmeralda simulada, ideal para ocasiões especiais',
    price: 145.90,
    originalPrice: 189.90,
    discount: 23,
    images: [
      '/placeholder-bn2mi.png',
    ],
    category: 'Anéis',
    categoryId: 'aneis',
    material: 'Ouro 18k',
    color: 'Dourado',
    size: 'Ajustável',
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 35
  },
  {
    id: '9',
    name: 'Pulseira Elos Quadrados',
    description: 'Pulseira moderna com elos quadrados em ouro branco fosco',
    price: 115.90,
    images: [
      '/placeholder-bn2mi.png',
    ],
    category: 'Pulseiras',
    categoryId: 'pulseiras',
    material: 'Prata 925',
    color: 'Branco',
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: '10',
    name: 'Colar com Pingente Lua',
    description: 'Colar delicado com pingente em forma de lua em prata 925',
    price: 74.90,
    images: [
      '/placeholder-q2ysy.png',
    ],
    category: 'Colares',
    categoryId: 'colares',
    material: 'Prata 925',
    color: 'Prateado',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 41
  },
  {
    id: '11',
    name: 'Brincos Abacaxi Dourado',
    description: 'Brincos exclusivos em formato de abacaxi com detalhes em ouro',
    price: 85.90,
    originalPrice: 119.90,
    discount: 28,
    images: [
      '/placeholder-ybl2k.png',
    ],
    category: 'Brincos',
    categoryId: 'brincos',
    material: 'Ouro 18k',
    color: 'Dourado',
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 17
  },
  {
    id: '12',
    name: 'Pulseira Corrente Colorida',
    description: 'Pulseira com corrente folheada e cristais coloridos intercalados',
    price: 69.90,
    images: [
      '/placeholder-bn2mi.png',
    ],
    category: 'Pulseiras',
    categoryId: 'pulseiras',
    material: 'Ouro 18k',
    color: 'Multicolor',
    inStock: true,
    rating: 4.7,
    reviewCount: 14
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
