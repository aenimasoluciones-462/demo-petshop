import Image from 'next/image'
import { Clock, PawPrint, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:py-12 md:grid-cols-2 md:gap-10 md:py-16">
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground sm:text-sm">
            <PawPrint className="size-4 shrink-0" aria-hidden="true" />
            Tu tienda de barrio en Peñaflor
          </span>

          <h1 className="font-serif text-[1.75rem] leading-[1.15] font-extrabold text-balance text-foreground sm:text-4xl md:text-4xl lg:text-5xl">
            Alimentos y accesorios para mascotas con{' '}
            <span className="text-primary">delivery en Peñaflor</span>
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Elige el saco y el formato que necesitas, armamos tu pedido y lo llevamos hasta tu
            puerta. Precios claros, sin sorpresas.
          </p>

          <div className="flex w-full items-start gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/60 p-3.5 sm:p-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary sm:size-6" aria-hidden="true" />
            <p className="text-sm leading-relaxed font-semibold text-secondary-foreground sm:text-base">
              Atención 24/7:{' '}
              <span className="font-normal text-muted-foreground">
                haz tu pedido a cualquier hora y lo programamos para despacho.
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center">
            <a
              href="#catalogo"
              className="rounded-full bg-primary px-6 py-3 text-center font-serif text-base font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              Ver catálogo
            </a>
            <a
              href="#como-comprar"
              className="rounded-full border-2 border-primary px-6 py-3 text-center font-serif text-base font-bold text-primary transition-colors hover:bg-secondary"
            >
              Cómo comprar
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            Pagas al recibir: efectivo, transferencia o débito.
          </p>
        </div>

        <div className="relative pb-4 sm:pb-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm">
            <Image
              src="/hero-mascotas.png"
              alt="Perro y gato junto a un saco de alimento para mascotas"
              width={1024}
              height={768}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-3 rounded-2xl bg-accent px-3.5 py-2.5 shadow-md sm:left-8 sm:px-4 sm:py-3">
            <p className="font-serif text-xs font-extrabold text-accent-foreground sm:text-sm">
              Despacho el mismo día
            </p>
            <p className="text-[0.7rem] font-semibold text-accent-foreground/80 sm:text-xs">
              En pedidos antes de las 18:00 h
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
