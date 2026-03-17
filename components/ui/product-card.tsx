"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    })
  }

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/produto/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-primary text-black">
              Novo
            </Badge>
          )}
          
          {product.discount && (
            <Badge className="absolute top-2 right-2 bg-destructive">
              -{product.discount}%
            </Badge>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-medium text-sm mb-1 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="font-semibold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="h-8 px-3"
          >
            <ShoppingBag className="h-3 w-3 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  )
}
