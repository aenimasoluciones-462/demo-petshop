'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatCLP, type Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [selected, setSelected] = useState(product.variants[0].label)
  const variant = product.variants.find((v) => v.label === selected) ?? product.variants[0]

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-4/3 bg-secondary/50">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 font-serif text-xs font-extrabold text-accent-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold tracking-wide text-primary uppercase">{product.brand}</p>
          <h3 className="font-serif text-xl leading-snug font-bold text-foreground">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
            Elige el formato
          </legend>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => {
              const isActive = v.label === selected
              return (
                <label
                  key={v.label}
                  className={`cursor-pointer rounded-full border-2 px-3.5 py-1.5 text-sm font-bold transition-colors ${
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`variant-${product.id}`}
                    value={v.label}
                    checked={isActive}
                    onChange={() => setSelected(v.label)}
                    className="sr-only"
                  />
                  {v.label}
                </label>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <div>
            <p className="font-serif text-2xl font-extrabold text-foreground">
              {formatCLP(variant.price)}
            </p>
            <p className="text-xs font-semibold text-muted-foreground">
              Formato {variant.label} · IVA incluido
            </p>
          </div>
          <button
            type="button"
            onClick={() => add(product, variant)}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 font-serif text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            <Plus className="size-4" aria-hidden="true" />
            Agregar
            <span className="sr-only">
              {product.name} formato {variant.label} al carro
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}
