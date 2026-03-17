'use client'

import { useState } from 'react'
import { Star, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Review {
  id: string
  author: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
}

interface ProductReviewsProps {
  productId: string
  averageRating?: number
}

// Mock reviews
const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Maria Silva',
    rating: 5,
    date: '2024-03-10',
    title: 'Perfeito! Muito bom mesmo',
    content: 'Produto de excelente qualidade, chegou rápido e bem embalado. Recomendo!',
    helpful: 12,
  },
  {
    id: '2',
    author: 'Ana Costa',
    rating: 5,
    date: '2024-03-08',
    title: 'Adorei a qualidade e o acabamento',
    content: 'Superou minhas expectativas. O material é duradouro e o design é elegante.',
    helpful: 8,
  },
  {
    id: '3',
    author: 'Juliana Oliveira',
    rating: 4,
    date: '2024-03-05',
    title: 'Muito bom, mas poderia ter mais tamanhos',
    content: 'O produto é bonito e bem feito. Só achei falta de mais opções de tamanho.',
    helpful: 5,
  },
]

export function ProductReviews({ productId, averageRating = 4.8 }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'rating'>('recent')

  const sortedReviews = [...mockReviews].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful - a.helpful
      case 'rating':
        return b.rating - a.rating
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Avaliações de Clientes</h2>

        {/* Rating Summary */}
        <div className="flex items-center gap-8 mb-6 pb-6 border-b border-muted">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">de 5</span>
            </div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Baseado em {mockReviews.length} avaliações
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="flex-1 space-y-1">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = mockReviews.filter((r) => r.rating === stars).length
              const percentage = (count / mockReviews.length) * 100

              return (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-6">
                    {count > 0 ? count : '-'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex gap-2">
        <span className="text-sm text-muted-foreground">Ordenar por:</span>
        {(['recent', 'helpful', 'rating'] as const).map((option) => (
          <Button
            key={option}
            variant={sortBy === option ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy(option)}
            className="capitalize"
          >
            {option === 'recent' && 'Mais Recentes'}
            {option === 'helpful' && 'Mais Úteis'}
            {option === 'rating' && 'Maior Nota'}
          </Button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border border-muted rounded-lg p-4">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {review.author.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{review.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Review Content */}
            <h3 className="font-semibold mb-2">{review.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{review.content}</p>

            {/* Helpful Button */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-xs">
                <ThumbsUp className="h-3 w-3 mr-1" />
                Útil ({review.helpful})
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <Button variant="outline" className="w-full">
        Carregar Mais Avaliações
      </Button>
    </div>
  )
}
