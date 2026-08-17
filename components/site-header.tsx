'use client'

import Image from 'next/image'
import { Clock, MapPin, ShoppingCart, Truck } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatCLP } from '@/lib/products'

export function SiteHeader() {
  const { count, total, openCart } = useCart()

  return (
    <header>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 bg-primary px-4 py-1.5 text-center text-[0.7rem] leading-tight font-semibold text-primary-foreground sm:gap-x-6 sm:py-2 sm:text-sm">
        <span className="flex items-center gap-1.5">
          <Truck className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
          Delivery en Peñaflor
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
          Pedidos 24/7 por WhatsApp
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Retiro en tienda disponible
        </span>
      </div>

      <div className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:py-3">
         

          <nav aria-label="Secciones" className="ml-auto hidden items-center gap-6 md:flex">
            <a
              href="#catalogo"
              className="font-serif text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              Catálogo
            </a>
            <a
              href="#como-comprar"
              className="font-serif text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              Cómo comprar
            </a>
            <a
              href="#contacto"
              className="font-serif text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              Contacto
            </a>
          </nav>

          <button
            type="button"
            onClick={openCart}
            className="ml-auto flex shrink-0 items-center gap-2 rounded-full bg-primary px-3.5 py-2.5 font-serif text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:px-4 md:ml-0"
          >
            <span className="relative">
              <ShoppingCart className="size-5" aria-hidden="true" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex size-4.5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </span>
            <span className={count > 0 ? 'inline' : 'hidden sm:inline'}>
              Mi carro
            </span>
            <span className="sr-only">Abrir carro de compras</span>
          </button>
        </div>
      </div>
    </header>
  )
}
