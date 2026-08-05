import { MessageCircle, MousePointerClick, PackageCheck } from 'lucide-react'

const STEPS = [
  {
    icon: MousePointerClick,
    title: 'Arma tu carro',
    text: 'Elige el alimento, el peso del saco y los accesorios que necesites.',
  },
  {
    icon: MessageCircle,
    title: 'Envía por WhatsApp',
    text: 'El carro genera un mensaje con tu pedido y total listo para enviar.',
  },
  {
    icon: PackageCheck,
    title: 'Recibe en tu casa',
    text: 'Coordinamos horario de despacho en Peñaflor y pagas al recibir.',
  },
]

export function HowToBuy() {
  return (
    <section id="como-comprar" className="scroll-mt-32 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-3xl font-extrabold text-balance text-foreground sm:text-4xl">
          Comprar toma menos de un minuto
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-secondary/40 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm font-extrabold text-muted-foreground">
                  Paso {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
