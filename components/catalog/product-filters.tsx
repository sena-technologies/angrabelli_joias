"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
  { id: 'aneis', name: 'Anéis', count: 24 },
  { id: 'brincos', name: 'Brincos', count: 18 },
  { id: 'colares', name: 'Colares', count: 32 },
  { id: 'pulseiras', name: 'Pulseiras', count: 15 },
]

const materials = [
  { id: 'ouro', name: 'Ouro 18k', count: 45 },
  { id: 'prata', name: 'Prata 925', count: 28 },
  { id: 'rose', name: 'Ouro Rosé', count: 16 },
]

const colors = [
  { id: 'dourado', name: 'Dourado', count: 45 },
  { id: 'prateado', name: 'Prateado', count: 28 },
  { id: 'rose', name: 'Rosé', count: 16 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  const clearFilters = () => {
    setPriceRange([0, 500])
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedColors([])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Limpar
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Faixa de Preço</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}</span>
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
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category.id, checked as boolean)
                }
              />
              <Label htmlFor={category.id} className="text-sm flex-1">
                {category.name}
              </Label>
              <span className="text-xs text-muted-foreground">
                ({category.count})
              </span>
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
                checked={selectedMaterials.includes(material.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedMaterials([...selectedMaterials, material.id])
                  } else {
                    setSelectedMaterials(selectedMaterials.filter(id => id !== material.id))
                  }
                }}
              />
              <Label htmlFor={material.id} className="text-sm flex-1">
                {material.name}
              </Label>
              <span className="text-xs text-muted-foreground">
                ({material.count})
              </span>
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
                checked={selectedColors.includes(color.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedColors([...selectedColors, color.id])
                  } else {
                    setSelectedColors(selectedColors.filter(id => id !== color.id))
                  }
                }}
              />
              <Label htmlFor={color.id} className="text-sm flex-1">
                {color.name}
              </Label>
              <span className="text-xs text-muted-foreground">
                ({color.count})
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
