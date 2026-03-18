"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useSearchFilter } from '@/contexts/search-filter-context'
import { Search } from 'lucide-react'

const categories = [
  { id: 'aneis', name: 'Anéis' },
  { id: 'brincos', name: 'Brincos' },
  { id: 'colares', name: 'Colares' },
  { id: 'pulseiras', name: 'Pulseiras' },
]

const materials = [
  { id: 'ouro', name: 'Ouro 18k' },
  { id: 'prata', name: 'Prata 925' },
  { id: 'rose', name: 'Ouro Rosé' },
]

const colors = [
  { id: 'dourado', name: 'Dourado' },
  { id: 'prateado', name: 'Prateado' },
  { id: 'rose', name: 'Rosé' },
]

export function ProductFilters() {
  const { filters, setSearch, setCategories, setPriceRange, setMaterials, setColors, clearFilters } = useSearchFilter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setCategories([...filters.categories, categoryId])
    } else {
      setCategories(filters.categories.filter(id => id !== categoryId))
    }
  }

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    if (checked) {
      setMaterials([...filters.materials, materialId])
    } else {
      setMaterials(filters.materials.filter(id => id !== materialId))
    }
  }

  const handleColorChange = (colorId: string, checked: boolean) => {
    if (checked) {
      setColors([...filters.colors, colorId])
    } else {
      setColors(filters.colors.filter(id => id !== colorId))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Limpar
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Faixa de Preço</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>R$ {filters.priceRange[0]}</span>
            <span>R$ {filters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Categorias</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category.id, checked as boolean)
                }
              />
              <Label htmlFor={category.id} className="text-sm flex-1">
                {category.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Materials */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center space-x-2">
              <Checkbox
                id={material.id}
                checked={filters.materials.includes(material.id)}
                onCheckedChange={(checked) => 
                  handleMaterialChange(material.id, checked as boolean)
                }
              />
              <Label htmlFor={material.id} className="text-sm flex-1">
                {material.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Cor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox
                id={color.id}
                checked={filters.colors.includes(color.id)}
                onCheckedChange={(checked) => 
                  handleColorChange(color.id, checked as boolean)
                }
              />
              <Label htmlFor={color.id} className="text-sm flex-1">
                {color.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
