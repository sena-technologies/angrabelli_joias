import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const categories = [
  {
    id: 'aneis',
    name: 'Anéis',
    description: 'Anéis elegantes para todas as ocasiões',
    image: '/elegant-rings.png',
    href: '/catalogo?categoria=aneis'
  },
  {
    id: 'brincos',
    name: 'Brincos',
    description: 'Brincos que realçam sua beleza',
    image: '/elegant-earrings.png',
    href: '/catalogo?categoria=brincos'
  },
  {
    id: 'colares',
    name: 'Colares',
    description: 'Colares sofisticados e únicos',
    image: '/elegant-necklaces.png',
    href: '/catalogo?categoria=colares'
  },
  {
    id: 'pulseiras',
    name: 'Pulseiras',
    description: 'Pulseiras delicadas e modernas',
    image: '/elegant-bracelets.png',
    href: '/catalogo?categoria=pulseiras'
  }
]

export function CategoriesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Nossas Categorias</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossa coleção organizada por categorias para encontrar a peça perfeita
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="group relative overflow-hidden rounded-lg">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-heading font-bold mb-2">{category.name}</h3>
              <p className="text-sm opacity-90 mb-4">{category.description}</p>
              <Link href={category.href}>
                <Button variant="secondary" size="sm">
                  Ver Produtos
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
