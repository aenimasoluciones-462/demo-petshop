export type CategoryId = 'perros' | 'gatos' | 'accesorios'

export type Variant = {
  /** Formato o peso, ej. "15 kg" o "Talla M" */
  label: string
  price: number
}

export type Product = {
  id: string
  name: string
  brand: string
  category: CategoryId
  description: string
  image: string
  variants: Variant[]
  badge?: string
}

export const CATEGORIES: { id: CategoryId; label: string; short: string }[] = [
  { id: 'perros', label: 'Alimentos Perros', short: 'Perros' },
  { id: 'gatos', label: 'Alimentos Gatos', short: 'Gatos' },
  { id: 'accesorios', label: 'Accesorios', short: 'Accesorios' },
]

export const WHATSAPP_NUMBER = '56912345678'
export const STORE_NAME = 'Aquí Mascotas'

export const PRODUCTS: Product[] = [
  {
    id: 'master-dog-adulto',
    name: 'Alimento Perro Adulto',
    brand: 'Master Dog',
    category: 'perros',
    description: 'Croqueta para perro adulto de todas las razas. Rendidor y de gran aceptación.',
    image: '/products/alimento-perro-adulto.png',
    badge: 'Más vendido',
    variants: [
      { label: '9 kg', price: 15990 },
      { label: '15 kg', price: 23990 },
      { label: '18 kg', price: 27490 },
    ],
  },
  {
    id: 'master-dog-cachorro',
    name: 'Alimento Cachorro',
    brand: 'Master Dog',
    category: 'perros',
    description: 'Con calcio y proteína extra para el crecimiento de cachorros hasta 12 meses.',
    image: '/products/alimento-cachorro.png',
    variants: [
      { label: '9 kg', price: 17490 },
      { label: '15 kg', price: 25990 },
      { label: '18 kg', price: 29990 },
    ],
  },
  {
    id: 'ownat-perro',
    name: 'Alimento Perro Premium',
    brand: 'Ownat',
    category: 'perros',
    description: 'Receta natural con pollo y arroz, alta digestibilidad y pelaje brillante.',
    image: '/products/alimento-perro-premium.png',
    variants: [
      { label: '4 kg', price: 21990 },
      { label: '15 kg', price: 52990 },
      { label: '20 kg', price: 66990 },
    ],
  },
  {
    id: 'master-cat-adulto',
    name: 'Alimento Gato Adulto',
    brand: 'Master Cat',
    category: 'gatos',
    description: 'Nutrición completa para gatos adultos, con taurina para una vista sana.',
    image: '/products/alimento-gato-adulto.png',
    badge: 'Más vendido',
    variants: [
      { label: '1 kg', price: 4290 },
      { label: '3 kg', price: 10990 },
      { label: '10 kg', price: 28990 },
    ],
  },
  {
    id: 'ownat-gato',
    name: 'Alimento Gatito Premium',
    brand: 'Ownat',
    category: 'gatos',
    description: 'Croqueta pequeña para gatitos, con Omega 3 y prebióticos.',
    image: '/products/alimento-gato-premium.png',
    variants: [
      { label: '1,5 kg', price: 9990 },
      { label: '4 kg', price: 23990 },
      { label: '8 kg', price: 41990 },
    ],
  },
  {
    id: 'arena-sanitaria',
    name: 'Arena Sanitaria Aglomerante',
    brand: 'Cat Fresh',
    category: 'gatos',
    description: 'Control de olor por 7 días, aglomera rápido y facilita la limpieza.',
    image: '/products/arena-sanitaria.png',
    variants: [
      { label: '4 kg', price: 4990 },
      { label: '10 kg', price: 10490 },
    ],
  },
  {
    id: 'collar-paseo',
    name: 'Set Collar + Correa',
    brand: 'PetWalk',
    category: 'accesorios',
    description: 'Nylon reforzado con costura doble y broche metálico. Ideal para paseos diarios.',
    image: '/products/collar-paseo.png',
    variants: [
      { label: 'Talla S', price: 6990 },
      { label: 'Talla M', price: 8490 },
      { label: 'Talla L', price: 9990 },
    ],
  },
  {
    id: 'comedero-doble',
    name: 'Comedero Doble Acero',
    brand: 'PetHome',
    category: 'accesorios',
    description: 'Dos platos de acero inoxidable desmontables con base antideslizante.',
    image: '/products/comedero-doble.png',
    variants: [
      { label: 'Pequeño', price: 7990 },
      { label: 'Grande', price: 11990 },
    ],
  },
  {
    id: 'cama-mascota',
    name: 'Cama Acolchada',
    brand: 'PetHome',
    category: 'accesorios',
    description: 'Cojín afelpado lavable, cómodo y abrigado para perros y gatos.',
    image: '/products/cama-mascota.png',
    variants: [
      { label: '50 cm', price: 14990 },
      { label: '70 cm', price: 21990 },
    ],
  },
  {
    id: 'juguete-mordedor',
    name: 'Juguete Mordedor',
    brand: 'PetPlay',
    category: 'accesorios',
    description: 'Caucho resistente y cuerda trenzada para juego y limpieza dental.',
    image: '/products/juguete-mordedor.png',
    variants: [
      { label: 'Mordedor', price: 3990 },
      { label: 'Cuerda', price: 4490 },
    ],
  },
]

export function formatCLP(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}
