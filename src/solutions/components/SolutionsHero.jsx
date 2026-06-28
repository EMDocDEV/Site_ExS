import { motion } from 'framer-motion'
import { ArrowRight, Network } from 'lucide-react'
import Container from '../../layout/Container'

function SolutionsHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_40%)]" />
      <div className="absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

      <Container className="relative z-10 grid min-h-[78vh] items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
            <Network size={16} />
            Soluții software enterprise
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Digitalizăm procesele care țin companiile în mișcare.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Extensys dezvoltă soluții software pentru management documente,
            integrare sisteme și automatizare operațională, adaptate companiilor
            care au nevoie de control, scalabilitate și performanță.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
            >
              Discută cu noi
              <ArrowRight size={18} />
            </a>

            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-orange-400/50 hover:text-orange-300"
            >
              Vezi soluțiile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-orange-400/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0F1E3A] p-5">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="grid gap-4">
                {[
                  ['EMDoc', 'Document workflow', '92%'],
                  ['Smart Connect', 'System integration', '78%'],
                  ['Enterprise', 'Custom platform', '86%'],
                ].map(([title, label, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="text-sm text-slate-400">{label}</p>
                      </div>
                      <span className="rounded-full bg-orange-400/10 px-3 py-1 text-sm font-bold text-orange-300">
                        {value}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-orange-400"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default SolutionsHero