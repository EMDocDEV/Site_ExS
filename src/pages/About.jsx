import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'
import Container from '../layout/Container'

const values = [
  {
    icon: Target,
    title: 'Claritate',
    text: 'Începem fiecare proiect prin înțelegerea proceselor reale, nu prin presupuneri tehnice.',
  },
  {
    icon: ShieldCheck,
    title: 'Încredere',
    text: 'Construim soluții stabile, sigure și ușor de folosit în contexte operaționale complexe.',
  },
  {
    icon: Users,
    title: 'Parteneriat',
    text: 'Lucrăm aproape de echipele clientului, cu comunicare clară și livrabile concrete.',
  },
  {
    icon: TrendingUp,
    title: 'Scalabilitate',
    text: 'Gândim arhitectura astfel încât soluțiile să poată crește odată cu organizația.',
  },
]

const stats = [
  ['10+', 'ani de experiență'],
  ['50+', 'procese digitalizate'],
  ['3', 'direcții software principale'],
  ['100%', 'orientare către business'],
]

function SectionLine() {
  return (
    <div className="absolute inset-x-0 top-0 flex justify-center">
      <div className="h-[1.5px] w-430  bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
    </div>
  )
}

function About() {
  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        <Container className="relative z-10 flex min-h-[70vh] items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              Despre Extensys Solutions
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Construim soluții software pentru companii care vor procese mai{' '}
              <span className="text-orange-500">clare</span> , mai <span className="text-orange-500">rapide</span> și mai  <span className="text-orange-500">inteligente</span> . 
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Extensys Solutions este partenerul tehnologic pentru organizații
              care vor să transforme procesele interne în fluxuri digitale
              eficiente, integrate și scalabile.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-24">
        <SectionLine />

        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Compania
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Tehnologie aplicată pe probleme reale de business.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
              <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  Nu dezvoltăm software doar pentru a bifa o cerință tehnică.
                  Analizăm procesele, înțelegem blocajele și construim soluții
                  care reduc munca manuală, conectează sistemele existente și
                  oferă echipelor control asupra activității.
                </p>

                <p>
                  De la managementul electronic al documentelor până la integrarea
                  aplicațiilor și dezvoltarea de platforme enterprise personalizate,
                  construim software care simplifică activitatea echipelor și produce
                  valoare operațională măsurabilă.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.03] py-24">
        <SectionLine />

        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: 'easeOut',
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/[0.07] hover:shadow-orange-500/10"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-orange-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="text-4xl font-black text-orange-400 transition duration-300 group-hover:scale-105 md:text-5xl">
                    {number}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-slate-300">
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24">
        <SectionLine />

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Valori
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Principiile după care construim fiecare proiect.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/[0.07] hover:shadow-orange-500/10"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300 transition duration-300 group-hover:scale-110 group-hover:bg-orange-400/15">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-white/10 py-24">
        <SectionLine />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:border-orange-400/30 hover:bg-white/[0.065] md:p-12"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                  Misiune
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                  Să transformăm complexitatea operațională în fluxuri digitale
                  simple și eficiente.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  Credem că software-ul bun trebuie să fie clar, sigur și
                  construit în jurul modului în care oamenii lucrează cu
                  adevărat.
                </p>

                <p>
                  De aceea, fiecare proiect Extensys Solutions pornește de la procese,
                  oameni și obiective de business, nu doar de la tehnologie.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative pb-24 pt-4">
        <SectionLine />

        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#0F1E3A]/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Vrei să discutăm despre digitalizarea proceselor tale?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
                Putem analiza împreună unde apar blocajele și ce soluție software
                ar aduce cel mai rapid impact.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0F1E3A] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl hover:shadow-black/20"
              >
                Contactează-ne
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default About