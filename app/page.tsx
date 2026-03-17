import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoriesSection } from '@/components/home/categories-section'
import { AboutPreview } from '@/components/home/about-preview'
import { Newsletter } from '@/components/home/newsletter'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <AboutPreview />
      <Newsletter />
    </div>
  )
}
