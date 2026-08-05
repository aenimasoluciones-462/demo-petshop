import Image from 'next/image'
import { Clock, PawPrint, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-bold text-secondary-foreground">
            <PawPrint className="size-4" aria-hidden="true" />
            Tu tienda de barrio en Peñaflor
          </span>

          <h1 className="font-serif text-4xl leading-tight font-extrabold text-balance text-foreground sm:text-5xl">
            Alimentos y accesorios para mascotas con{' '}
            <span className="text-primary">delivery en Peñaflor</span>
          </h1>

          <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
            Elige el saco y el formato que necesitas, armamos tu pedido y lo llevamos hasta tu
            puerta. Precios claros, sin sorpresas.
          </p>

          <div className="flex w-full items-start gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/60 p-4">
            <Clock className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-base leading-relaxed font-semibold text-secondary-foreground">
              Atención 24/7:{' '}
              <span className="font-normal text-muted-foreground">
                haz tu pedido a cualquier hora y lo programamos para despacho.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalogo"
              className="rounded-full bg-primary px-6 py-3 font-serif text-base font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              Ver catálogo
            </a>
            <a
              href="#como-comprar"
              className="rounded-full border-2 border-primary px-6 py-3 font-serif text-base font-bold text-primary transition-colors hover:bg-secondary"
            >
              Cómo comprar
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            Pagas al recibir: efectivo, transferencia o débito.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm">
            <Image
              src="/hero-mascotas.png"
              alt="Perro y gato junto a un saco de alimento para mascotas"
              width={1024}
              height={768}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-accent px-4 py-3 shadow-md sm:left-8">
            <p className="font-serif text-sm font-extrabold text-accent-foreground">
              Despacho el mismo día
            </p>
            <p className="text-xs font-semibold text-accent-foreground/80">
              En pedidos antes de las 18:00 h
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
