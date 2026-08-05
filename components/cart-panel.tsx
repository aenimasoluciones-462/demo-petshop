'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Minus, Plus, ShoppingBasket, Trash2, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatCLP, STORE_NAME, WHATSAPP_NUMBER } from '@/lib/products'

export function CartPanel() {
  const { lines, total, count, isOpen, closeCart, setQty, remove } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')

  function buildMessage() {
    const items = lines
      .map(
        (line) =>
          `• ${line.qty} x ${line.brand} ${line.name} (${line.variant}) — ${formatCLP(
            line.price * line.qty,
          )}`,
      )
      .join('\n')

    return [
      `¡Hola ${STORE_NAME}! Quiero hacer este pedido:`,
      '',
      items,
      '',
      `TOTAL: ${formatCLP(total)}`,
      '',
      `Nombre: ${name || '(por confirmar)'}`,
      `Dirección de despacho: ${address || '(por confirmar)'}`,
      notes ? `Comentarios: ${notes}` : null,
      '',
      'Enviado desde la web de Aquí Mascotas.',
    ]
      .filter((part) => part !== null)
      .join('\n')
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        aria-label="Carro de compras"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 flex h-dvh w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
          <h2 className="font-serif text-xl font-extrabold text-foreground">
            Mi carro {count > 0 && <span className="text-muted-foreground">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Cerrar carro</span>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <ShoppingBasket className="size-10 text-muted-foreground" aria-hidden="true" />
            <p className="font-serif text-lg font-bold text-foreground">Tu carro está vacío</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Agrega sacos de alimento o accesorios y verás el total acumulado al instante.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 font-serif text-sm font-bold text-primary-foreground"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-3 py-4">
                  <div className="relative size-18 shrink-0 overflow-hidden rounded-xl bg-secondary/60">
                    <Image
                      src={line.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="72px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-serif text-base font-bold text-foreground">
                          {line.name}
                        </p>
                        <p className="text-xs font-semibold text-muted-foreground">
                          {line.brand} · {line.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.key)}
                        className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-destructive"
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                        <span className="sr-only">Quitar {line.name}</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          className="rounded-full p-1.5 text-foreground transition-colors hover:bg-secondary"
                        >
                          <Minus className="size-3.5" aria-hidden="true" />
                          <span className="sr-only">Quitar una unidad</span>
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          className="rounded-full p-1.5 text-foreground transition-colors hover:bg-secondary"
                        >
                          <Plus className="size-3.5" aria-hidden="true" />
                          <span className="sr-only">Agregar una unidad</span>
                        </button>
                      </div>
                      <p className="font-serif text-base font-extrabold text-foreground">
                        {formatCLP(line.price * line.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-border bg-secondary/40 px-5 py-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-xs font-bold text-muted-foreground uppercase">
                  Nombre
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="rounded-xl border border-input bg-card px-3 py-2 text-sm font-normal text-foreground normal-case placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs font-bold text-muted-foreground uppercase">
                  Dirección
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Calle y número, Peñaflor"
                    className="rounded-xl border border-input bg-card px-3 py-2 text-sm font-normal text-foreground normal-case placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1 text-xs font-bold text-muted-foreground uppercase">
                Comentarios
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Horario preferido, referencias, etc."
                  className="rounded-xl border border-input bg-card px-3 py-2 text-sm font-normal text-foreground normal-case placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </label>

              <div className="flex items-center justify-between pt-1">
                <span className="font-serif text-base font-bold text-foreground">Total</span>
                <span className="font-serif text-2xl font-extrabold text-foreground">
                  {formatCLP(total)}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-serif text-base font-extrabold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="size-5" />
                Enviar pedido por WhatsApp
              </a>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Se abrirá WhatsApp con tu pedido ya escrito. Confirmamos stock y horario de despacho
                por el mismo chat.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.47-.72-2.94-1.16-4.76-4.22-4.9-4.42-.14-.2-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.8 1.95.87 2.09.07.14.12.31.02.5-.1.2-.15.32-.29.5-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.2.72-.84.91-1.13.19-.29.38-.24.65-.14.26.09 1.65.78 1.94.92.29.14.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  )
}
