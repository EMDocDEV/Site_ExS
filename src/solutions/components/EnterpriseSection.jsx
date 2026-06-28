import { motion } from 'framer-motion'
import { Layers3, Code2, Gauge, Settings2 } from 'lucide-react'
import Container from '../../layout/Container'

const items = [
  ['Analiză procese', Layers3],
  ['Dezvoltare custom', Code2],
  ['Performanță', Gauge],
  ['Mentenanță', Settings2],
]

function EnterpriseSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_42%)]" />

      <Container className="relative z-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Enterprise
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Soluții software construite pe procesele companiei tale.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Dezvoltăm aplicații enterprise personalizate pentru organizații
                care au nevoie de platforme robuste, integrare cu sisteme
                existente și scalabilitate pe termen lung.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {items.map(([label, Icon]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0F1E3A]/80 p-5 font-semibold text-slate-200"
                >
                  <Icon size={20} className="text-orange-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EnterpriseSection