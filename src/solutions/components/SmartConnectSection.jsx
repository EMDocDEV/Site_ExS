import { motion } from 'framer-motion'
import { Database, Server, Cable, BarChart3 } from 'lucide-react'
import Container from '../../layout/Container'

const systems = [
  ['ERP', Database],
  ['CRM', Server],
  ['API', Cable],
  ['BI', BarChart3],
]

function SmartConnectSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative grid gap-4">
                {systems.map(([label, Icon]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0F1E3A]/80 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={21} className="text-orange-300" />
                      <span className="font-semibold">{label}</span>
                    </div>
                    <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300">
                      conectat
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Smart Connect
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Conectăm sistemele care nu ar trebui să lucreze separat.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Smart Connect sincronizează date între aplicații, automatizează
              procese repetitive și reduce erorile produse de transferul manual
              al informațiilor.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default SmartConnectSection