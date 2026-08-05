import Image from 'next/image'
import { Clock, MapPin, Phone } from 'lucide-react'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-32 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo-aqui-mascotas.png"
            alt="Aquí Mascotas"
            width={1170}
            height={300}
            className="h-14 w-auto max-w-[280px] object-contain"
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Alimento para mascotas y accesorios. Atendemos a las familias de Peñaflor y alrededores.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-lg font-extrabold text-foreground">Contacto</h2>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-semibold text-primary hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            {WHATSAPP_DISPLAY}
          </a>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Av. Vicuña Mackenna 1234, Peñaflor
          </p>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Tienda: lun a sáb 10:00 – 20:00
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-lg font-extrabold text-foreground">Despachos</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Peñaflor centro: despacho sin costo sobre $25.000. Sectores rurales y comunas vecinas con
            recargo según distancia.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pedidos web disponibles 24/7; los recibidos de noche se programan para el día siguiente.
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5">
        <p className="mx-auto max-w-6xl text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aquí Mascotas. Maqueta de demostración.
        </p>
      </div>
    </footer>
  )
}
