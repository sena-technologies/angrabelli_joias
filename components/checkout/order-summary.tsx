'use client'

import { useCart } from '@/contexts/cart-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OrderSummary() {
  const context = useCart()

  if (!context) {
    return null
  }

  const { items, total } = context
  const shippingCost = total > 100 ? 0 : 15.90
  const finalTotal = total + shippingCost

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Lista de itens */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {item.name} x {item.quantity}
              </span>
              <span className="font-medium">
                R$ {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200" />

        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>R$ {total.toFixed(2)}</span>
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

        {/* Separador */}
        <div className="border-t border-gray-200" />

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">R$ {finalTotal.toFixed(2)}</span>
        </div>

        {/* Aviso */}
        <div className="text-xs text-muted-foreground bg-blue-50 p-2 rounded mt-4">
          ℹ️ Frete grátis para compras acima de R$ 100
        </div>
      </CardContent>
    </Card>
  )
}
