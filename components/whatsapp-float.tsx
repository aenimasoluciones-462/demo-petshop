'use client'

import { useCart } from '@/components/cart-provider'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/products'

const DEFAULT_MESSAGE =
  '¡Hola Aquí Mascotas! Vengo desde la web y quiero hacer una consulta sobre alimentos y accesorios.'

export function WhatsAppFloat() {
  const { isOpen } = useCart()

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${WHATSAPP_DISPLAY}`}
      className={`fixed bottom-5 left-5 z-40 flex items-center gap-2.5 rounded-full bg-whatsapp p-3.5 text-whatsapp-foreground shadow-xl transition-all duration-300 hover:scale-105 md:bottom-7 md:left-7 md:pr-5 ${
        isOpen ? 'pointer-events-none translate-y-4 opacity-0' : 'opacity-100'
      }`}
    >
      <span className="relative flex size-7 shrink-0 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp-foreground/40" />
        <WhatsAppIcon className="relative size-7" />
      </span>
      <span className="hidden font-serif text-sm font-extrabold whitespace-nowrap md:inline">
        Escríbenos por WhatsApp
      </span>
    </a>
  )
}
