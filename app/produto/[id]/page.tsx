import { ProductGallery } from '@/components/product/product-gallery'
import { ProductInfo } from '@/components/product/product-info'
import { ProductAddCart } from '@/components/product/product-add-cart'
import { ProductReviews } from '@/components/product/product-reviews'
import { RelatedProducts } from '@/components/product/related-products'
import { getProductById, getAllProducts } from '@/lib/products'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id)
  
  if (!product) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: `${product.name} - Angrabelli Joias`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, ${product.material}, semijoias`,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)
  const allProducts = await getAllProducts()
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-1">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        <div className="lg:col-span-1">
          <ProductInfo product={product} />
        </div>

        <div className="lg:col-span-1">
          <ProductAddCart product={product} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <ProductReviews productId={product.id} averageRating={product.rating} />
      </div>

      {/* Related Products Section */}
      <RelatedProducts 
        categoryId={product.categoryId} 
        currentProductId={product.id}
        products={allProducts}
      />
    </div>
  )
}
