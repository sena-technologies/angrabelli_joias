'use client'

import { useContext } from 'react'
import { CartContext } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export function CartSummary() {
  const context = useContext(CartContext)

  if (!context) {
    return <div>Erro ao carregar resumo</div>
  }

  const { total, itemCount, items } = context

  const shippingCost = total > 100 ? 0 : 15.90
  const subtotal = total
  const finalTotal = subtotal + shippingCost

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>

        {/* Frete */}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Frete</span>
          <span>
            {shippingCost === 0 ? (
              <span className="text-green-600 font-semibold">Grátis</span>
            ) : (
              `R$ ${shippingCost.toFixed(2)}`
            )}
          </span>
        </div>

        {/* Aviso de Frete Grátis */}
        {shippingCost > 0 && (
          <p className="text-xs text-muted-foreground bg-blue-50 p-2 rounded">
            Frete grátis para compras acima de R$ 100
          </p>
        )}

        {/* Separador */}
        <div className="border-t border-gray-200 pt-4" />

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">R$ {finalTotal.toFixed(2)}</span>
        </div>

        {/* Quantidade de itens */}
        <p className="text-sm text-muted-foreground">
          {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>

        {/* Botões */}
        <div className="space-y-2 pt-4">
          {items.length > 0 ? (
            <>
              <Link href="/checkout" className="block">
                <Button className="w-full" size="lg">
                  Ir para Checkout
                </Button>
              </Link>
              <Link href="/catalogo" className="block">
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/catalogo" className="block">
              <Button className="w-full" size="lg">
                Voltar ao Catálogo
              </Button>
            </Link>
          )}
        </div>

        {/* Informações Adicionais */}
        <div className="text-xs text-muted-foreground space-y-1 border-t pt-4">
          <p>✓ Frete seguro</p>
          <p>✓ Embalagem premium</p>
          <p>✓ Garantia de qualidade</p>
        </div>
      </CardContent>
    </Card>
  )
}
