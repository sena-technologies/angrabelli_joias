'use client'

import Link from 'next/link'
import { Product } from '@/types/product'
import { ProductCard } from '@/components/ui/product-card'

interface RelatedProductsProps {
  categoryId: string
  currentProductId: string
  products?: Product[]
}

export function RelatedProducts({ categoryId, currentProductId, products = [] }: RelatedProductsProps) {
  if (products.length === 0) {
    return null
  }

  const relatedProducts = products
    .filter(p => p.categoryId === categoryId && p.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Produtos Relacionados</h2>
        <p className="text-muted-foreground">
          Outros produtos da categoria {categoryId}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/produto/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}
