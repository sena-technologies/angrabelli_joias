import { ProductCard } from '@/components/ui/product-card'
import { getFeaturedProducts } from '@/lib/products'

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Produtos em Destaque</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selecionamos especialmente para você as peças mais desejadas da nossa coleção
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
