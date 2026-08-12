'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Product, Variant } from '@/lib/products'

export type CartLine = {
  key: string
  productId: string
  name: string
  brand: string
  variant: string
  price: number
  image: string
  qty: number
}

type CartContextValue = {
  lines: CartLine[]
  count: number
  total: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  add: (product: Product, variant: Variant, qty?: number) => void
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const add = useCallback((product: Product, variant: Variant, qty = 1) => {
    const key = `${product.id}__${variant.label}`
    setLines((prev) => {
      const existing = prev.find((line) => line.key === key)
      if (existing) {
        return prev.map((line) => (line.key === key ? { ...line, qty: line.qty + qty } : line))
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          brand: product.brand,
          variant: variant.label,
          price: variant.price,
          image: product.image,
          qty,
        },
      ]
    })
  }, [])

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((line) => line.key !== key)
        : prev.map((line) => (line.key === key ? { ...line, qty } : line)),
    )
  }, [])

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((line) => line.key !== key))
  }, [])

  const value = useMemo<CartContextValue>(() => {
    return {
      lines,
      count: lines.reduce((acc, line) => acc + line.qty, 0),
      total: lines.reduce((acc, line) => acc + line.qty * line.price, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear: () => setLines([]),
    }
  }, [lines, isOpen, add, setQty, remove])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
