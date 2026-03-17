'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'

export function CheckoutForm() {
  const { total, items, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Aqui você conectaria a um backend real para processar o pagamento
    console.log('Pedido confirmado:', { formData, items, total })

    setOrderPlaced(true)
    clearCart()
    setIsLoading(false)
  }

  if (orderPlaced) {
    return (
      <div className="text-center py-12">
        <div className="mb-4 text-4xl">✅</div>
        <h2 className="text-2xl font-bold mb-2">Pedido Confirmado!</h2>
        <p className="text-muted-foreground mb-6">
          Obrigado pela sua compra. Você receberá um email de confirmação em breve.
        </p>
        <Link href="/catalogo">
          <Button>Voltar ao Catálogo</Button>
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Seu carrinho está vazio</p>
        <Link href="/catalogo">
          <Button>Voltar ao Catálogo</Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Endereço de Entrega */}
      <Card>
        <CardHeader>
          <CardTitle>Endereço de Entrega</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nome</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Sobrenome</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Seu sobrenome"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Rua, número"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="São Paulo"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="SP"
                required
              />
            </div>
            <div>
              <Label htmlFor="zipCode">CEP</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="00000-000"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dados de Pagamento */}
      <Card>
        <CardHeader>
          <CardTitle>Dados de Pagamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cardName">Nome no Cartão</Label>
            <Input
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <Label htmlFor="cardNumber">Número do Cartão</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Data de Validade</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/AA"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="000"
                maxLength={4}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botões de Ação */}
      <div className="flex gap-4">
        <Link href="/carrinho" className="flex-1">
          <Button variant="outline" className="w-full">
            Voltar ao Carrinho
          </Button>
        </Link>
        <Button 
          type="submit" 
          className="flex-1"
          disabled={isLoading}
        >
          {isLoading ? 'Processando...' : `Finalizar Compra - R$ ${total.toFixed(2)}`}
        </Button>
      </div>
    </form>
  )
}
