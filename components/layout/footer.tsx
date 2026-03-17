import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />
              <span className="text-xl font-heading font-bold">Lumina Joias</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Semijoias de luxo que realçam sua beleza natural. 
              Qualidade e elegância em cada peça.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/catalogo" className="block text-sm text-muted-foreground hover:text-foreground">
                Catálogo
              </Link>
              <Link href="/sobre" className="block text-sm text-muted-foreground hover:text-foreground">
                Sobre Nós
              </Link>
              <Link href="/contato" className="block text-sm text-muted-foreground hover:text-foreground">
                Contato
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categorias</h3>
            <div className="space-y-2">
              <Link href="/catalogo?categoria=aneis" className="block text-sm text-muted-foreground hover:text-foreground">
                Anéis
              </Link>
              <Link href="/catalogo?categoria=brincos" className="block text-sm text-muted-foreground hover:text-foreground">
                Brincos
              </Link>
              <Link href="/catalogo?categoria=colares" className="block text-sm text-muted-foreground hover:text-foreground">
                Colares
              </Link>
              <Link href="/catalogo?categoria=pulseiras" className="block text-sm text-muted-foreground hover:text-foreground">
                Pulseiras
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@luminajoias.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Lumina Joias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
