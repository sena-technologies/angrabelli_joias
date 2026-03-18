"use client"

import { useState, useEffect } from 'react'
import { ProductCard } from '@/components/ui/product-card'
import { getAllProducts } from '@/lib/products'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { useSearchFilter } from '@/contexts/search-filter-context'

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const { filters } = useSearchFilter()
  const productsPerPage = 12

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
        setFilteredProducts(allProducts)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  // Apply filters whenever they change
  useEffect(() => {
    let result = products

    // Filter by search text
    if (filters.search.trim() !== '') {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      )
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(product =>
        filters.categories.includes(product.categoryId)
      )
    }

    // Filter by price range
    result = result.filter(product =>
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    )

    // Filter by materials
    if (filters.materials.length > 0) {
      result = result.filter(product => {
        const productMaterial = product.material?.toLowerCase()
        return filters.materials.some(materialId =>
          productMaterial?.includes(getMaterialName(materialId).toLowerCase())
        )
      })
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      result = result.filter(product => {
        const productColor = product.color?.toLowerCase()
        return filters.colors.some(colorId =>
          productColor?.includes(getColorName(colorId).toLowerCase())
        )
      })
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [products, filters])

  if (loading) {
    return <div className="text-center py-8">Carregando produtos...</div>
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length === 0 ? (
            'Nenhum produto encontrado'
          ) : (
            <>
              Mostrando {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} de {filteredProducts.length} produtos
            </>
          )}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Nenhum produto encontrado com os filtros selecionados</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Limpar Filtros
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Próxima
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// Helper functions to map filter IDs to actual values
function getMaterialName(materialId: string): string {
  const materials: Record<string, string> = {
    'ouro': 'Ouro 18k',
    'prata': 'Prata 925',
    'rose': 'Ouro Rosé',
  }
  return materials[materialId] || ''
}

function getColorName(colorId: string): string {
  const colors: Record<string, string> = {
    'dourado': 'Dourado',
    'prateado': 'Prateado',
    'rose': 'Rosé',
  }
  return colors[colorId] || ''
}
