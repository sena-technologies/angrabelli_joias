'use client'

import { useState } from 'react'
import { ShoppingBag, Heart, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { Product } from '@/types/product'
import { useToast } from '@/hooks/use-toast'

interface ProductAddCartProps {
  product: Product
}

export function ProductAddCart({ product }: ProductAddCartProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast({
        title: 'Produto Indisponível',
        description: 'Este produto está fora de estoque no momento.',
        variant: 'destructive',
      })
      return
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }

    setAddedToCart(true)
    toast({
      title: 'Adicionado ao Carrinho',
      description: `${quantity} ${quantity === 1 ? 'item' : 'itens'} de ${product.name}`,
    })

    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? 'Removido de Favoritos' : 'Adicionado a Favoritos',
      description: isWishlisted
        ? `${product.name} foi removido de seus favoritos`
        : `${product.name} foi adicionado a seus favoritos`,
    })
  }

  return (
    <div className="space-y-4 sticky top-24 p-4 bg-muted/30 rounded-lg border border-muted">
      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Quantidade</label>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity === 1}
          >
            −
          </Button>
          <div className="flex-1 text-center font-semibold">{quantity}</div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
            disabled={!product.inStock}
          >
            +
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        size="lg"
        className="w-full"
        onClick={handleAddToCart}
        disabled={!product.inStock || addedToCart}
      >
        {addedToCart ? (
          <>
            <Check className="h-5 w-5 mr-2" />
            Adicionado!
          </>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5 mr-2" />
            Adicionar ao Carrinho
          </>
        )}
      </Button>

      {/* Add to Wishlist Button */}
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={handleAddToWishlist}
      >
        <Heart
          className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
        />
        {isWishlisted ? 'Remover de Favoritos' : 'Adicionar a Favoritos'}
      </Button>

      {/* Stock Status */}
      <div className="text-sm text-center">
        {product.inStock ? (
          <p className="text-green-600 font-medium">✓ Em Estoque - Entrega Rápida</p>
        ) : (
          <p className="text-red-600 font-medium">✗ Fora de Estoque</p>
        )}
      </div>

      {/* Info */}
      <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t border-muted">
        <p>• Frete grátis acima de R$ 100</p>
        <p>• Embalagem premium com caixa de presente</p>
        <p>• Garantia de qualidade</p>
      </div>
    </div>
  )
}
