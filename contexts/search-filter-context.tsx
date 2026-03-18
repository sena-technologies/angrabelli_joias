"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export interface SearchFilters {
  search: string
  categories: string[]
  priceRange: [number, number]
  materials: string[]
  colors: string[]
}

interface SearchFilterContextType {
  filters: SearchFilters
  setSearch: (search: string) => void
  setCategories: (categories: string[]) => void
  setPriceRange: (range: [number, number]) => void
  setMaterials: (materials: string[]) => void
  setColors: (colors: string[]) => void
  clearFilters: () => void
}

const defaultFilters: SearchFilters = {
  search: '',
  categories: [],
  priceRange: [0, 500],
  materials: [],
  colors: [],
}

const SearchFilterContext = createContext<SearchFilterContextType | undefined>(undefined)

export function SearchFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters)

  const setSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }))
  }

  const setCategories = (categories: string[]) => {
    setFilters(prev => ({ ...prev, categories }))
  }

  const setPriceRange = (range: [number, number]) => {
    setFilters(prev => ({ ...prev, priceRange: range }))
  }

  const setMaterials = (materials: string[]) => {
    setFilters(prev => ({ ...prev, materials }))
  }

  const setColors = (colors: string[]) => {
    setFilters(prev => ({ ...prev, colors }))
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <SearchFilterContext.Provider
      value={{
        filters,
        setSearch,
        setCategories,
        setPriceRange,
        setMaterials,
        setColors,
        clearFilters,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  )
}

export function useSearchFilter() {
  const context = useContext(SearchFilterContext)
  if (context === undefined) {
    throw new Error('useSearchFilter must be used within SearchFilterProvider')
  }
  return context
}
