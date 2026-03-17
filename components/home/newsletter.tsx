"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simula envio do email
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades em breve.",
    })

    setEmail('')
    setIsLoading(false)
  }

  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-heading font-bold">
            Fique por Dentro das Novidades
          </h2>
          
          <p className="text-muted-foreground">
            Seja a primeira a saber sobre lançamentos, promoções exclusivas e 
            dicas de estilo. Cadastre-se em nossa newsletter.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Inscrever-se'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  )
}
