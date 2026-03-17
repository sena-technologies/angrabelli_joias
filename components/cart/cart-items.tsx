'use client'

import { useContext } from 'react'
import { CartContext } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { X, Minus, Plus } from 'lucide-react'
import Link from 'next/link'

export function CartItems() {
  const context = useContext(CartContext)
  
  if (!context) {
    return <div>Erro ao carregar carrinho</div>
  }

  const { items, removeItem, updateQuantity } = context

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Seu carrinho está vazio</p>
        <Link href="/catalogo">
          <Button>Continuar Comprando</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 border rounded-lg p-4">
          {/* Imagem do Produto */}
          <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
            {item.images && item.images[0] ? (
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                N/A
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.material}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-8 text-center font-semibold">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-right">
                <p className="font-semibold text-lg">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </p>
                {item.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    R$ {(item.originalPrice * item.quantity).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botão Remover */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.id)}
            className="flex-shrink-0 h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
