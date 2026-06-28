import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Target, Users, TrendingUp } from 'lucide-react'
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

function About() {
  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />

        <Container className="relative z-10 flex min-h-[70vh] items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              Despre Extensys
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Construim soluții software pentru companii care vor procese mai
              clare, mai rapide și mai inteligente.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Extensys este partenerul tehnologic pentru organizații care vor să
              transforme procesele interne în fluxuri digitale eficiente,
              integrate și scalabile.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              className="space-y-6 text-lg leading-8 text-slate-300"
            >
              <p>
                Nu dezvoltăm software doar pentru a bifa o cerință tehnică.
                Analizăm procesele, înțelegem blocajele și construim soluții
                care reduc munca manuală, conectează sistemele existente și
                oferă echipelor control asupra activității.
              </p>

              <p>
                De la management electronic al documentelor până la integrare
                între aplicații și platforme enterprise custom, obiectivul
                nostru este același: software care produce valoare operațională
                măsurabilă.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center shadow-2xl shadow-black/10"
              >
                <div className="text-4xl font-black text-orange-400 md:text-5xl">
                  {number}
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-300">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
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
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 transition hover:-translate-y-2 hover:border-orange-400/40"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{value.text}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-24">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
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
                  De aceea, fiecare soluție Extensys pornește de la procese,
                  oameni și obiective de business, nu doar de la tehnologie.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Vrei să discutăm despre digitalizarea proceselor tale?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
              Putem analiza împreună unde apar blocajele și ce soluție software
              ar aduce cel mai rapid impact.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0F1E3A] transition hover:bg-slate-100"
            >
              Contactează-ne
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default About