'use client'

import Image from 'next/image'
import { Clock, MapPin, ShoppingCart, Truck } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatCLP } from '@/lib/products'

export function SiteHeader() {
  const { count, total, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
        <span className="flex items-center gap-1.5">
          <Truck className="size-4 shrink-0" aria-hidden="true" />
          Delivery en Peñaflor
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          Pedidos 24/7 por WhatsApp
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Retiro en tienda disponible
        </span>
      </div>

      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo-aqui-mascotas.png"
              alt="Aquí Mascotas, alimento para mascotas y accesorios"
              width={1170}
              height={300}
              priority
              className="h-11 w-auto max-w-[240px] object-contain sm:h-14 sm:max-w-[320px]"
            />
            <span className="sr-only">Aquí Mascotas</span>
          </a>

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
            className="ml-auto flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-serif text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none md:ml-0"
          >
            <span className="relative">
              <ShoppingCart className="size-5" aria-hidden="true" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex size-4.5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </span>
            <span className="hidden sm:inline">{count > 0 ? formatCLP(total) : 'Mi carro'}</span>
            <span className="sr-only">Abrir carro de compras</span>
          </button>
        </div>
      </div>
    </header>
  )
}
