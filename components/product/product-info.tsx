'use client'

import { Star, Package, Truck, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/types/product'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const discountPercentage = product.discount || 0
  const hasDiscount = product.originalPrice && product.originalPrice > product.price

  return (
    <div className="space-y-6">
      {/* Badge e Título */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {product.isNew && <Badge variant="default">Novo</Badge>}
          {hasDiscount && (
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              -{discountPercentage}%
            </Badge>
          )}
        </div>
        <h1 className="text-3xl font-heading font-bold">{product.name}</h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating || 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product.rating?.toFixed(1)} ({product.reviewCount} avaliações)
        </span>
      </div>

      {/* Preço */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-lg text-muted-foreground line-through">
              R$ {product.originalPrice?.toFixed(2)}
            </span>
          )}
        </div>
        {product.inStock ? (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            ✓ Em Estoque
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Fora de Estoque
          </Badge>
        )}
      </div>

      {/* Descrição */}
      <p className="text-base text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Características */}
      <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted">
        <div>
          <span className="text-sm text-muted-foreground">Material</span>
          <p className="font-semibold">{product.material}</p>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">Cor</span>
          <p className="font-semibold">{product.color}</p>
        </div>
        {product.size && (
          <div>
            <span className="text-sm text-muted-foreground">Tamanho</span>
            <p className="font-semibold">{product.size}</p>
          </div>
        )}
        <div>
          <span className="text-sm text-muted-foreground">Categoria</span>
          <p className="font-semibold">{product.category}</p>
        </div>
      </div>

      {/* Benefícios */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5 text-primary" />
          <span className="text-sm">Frete grátis para compras acima de R$ 100</span>
        </div>
        <div className="flex items-center gap-3">
          <Package className="h-5 w-5 text-primary" />
          <span className="text-sm">Embalagem premium com caixa de presente</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm">Garantia de qualidade e autenticidade</span>
        </div>
      </div>
    </div>
  )
}
