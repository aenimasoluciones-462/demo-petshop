import { CartPanel } from '@/components/cart-panel'
import { CartProvider } from '@/components/cart-provider'
import { Catalog } from '@/components/catalog'
import { Hero } from '@/components/hero'
import { HowToBuy } from '@/components/how-to-buy'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Home() {
  return (
    <CartProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <HowToBuy />
      </main>
      <SiteFooter />
      <CartPanel />
      <WhatsAppFloat />
    </CartProvider>
  )
}
