'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { CATEGORIES, PRODUCTS, type CategoryId } from '@/lib/products'

type Filter = CategoryId | 'todos'

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todo el catálogo' },
  ...CATEGORIES.map((c) => ({ id: c.id as Filter, label: c.label })),
]

export function Catalog() {
  const [filter, setFilter] = useState<Filter>('todos')

  const products = useMemo(
    () => (filter === 'todos' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-14">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-3xl font-extrabold text-balance text-foreground sm:text-4xl">
            Nuestro catálogo
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Filtra por categoría, elige el peso o formato y agrégalo al carro. El total se calcula al
            instante.
          </p>
        </div>

        <div role="tablist" aria-label="Categorías" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border-2 px-4 py-2 font-serif text-sm font-bold transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary/50'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <p className="text-sm font-semibold text-muted-foreground" aria-live="polite">
          {products.length} productos disponibles
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
