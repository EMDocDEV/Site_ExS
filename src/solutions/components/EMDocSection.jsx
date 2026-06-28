import { motion } from 'framer-motion'
import { ShieldCheck, Search, Workflow, LockKeyhole } from 'lucide-react'
import Container from '../../layout/Container'

const benefits = [
  ['Fluxuri digitale', Workflow],
  ['Căutare rapidă', Search],
  ['Permisiuni clare', LockKeyhole],
  ['Audit complet', ShieldCheck],
]

function EMDocSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              EMDoc
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Documente organizate, aprobări rapide, control complet.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              EMDoc elimină haosul documentelor fizice, al emailurilor pierdute
              și al aprobărilor greu de urmărit. Totul devine digital,
              trasabil și securizat.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map(([label, Icon]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm font-semibold text-slate-200"
                >
                  <Icon size={20} className="text-orange-300" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-orange-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1E3A] p-6 shadow-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <p className="font-bold">Document workflow</p>
                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                    live
                  </span>
                </div>

                <div className="space-y-4">
                  {['Facturi', 'Contracte', 'Aprobări', 'Arhivă'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-white/[0.05] p-4"
                    >
                      <span className="text-sm font-semibold">{item}</span>
                      <span className="text-xs text-slate-400">procesat</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default EMDocSection