import { motion } from 'framer-motion'
import { ArrowRight, Network, FileText, Share2, Code2 } from 'lucide-react'
import Container from '../../layout/Container'

const expertise = [
  [
    FileText,
    'EMDoc',
    'Management electronic al documentelor și fluxurilor interne.',
  ],
  [
    Share2,
    'EMDoc B2B Smart Connect',
    'Portal securizat pentru comunicarea documentelor cu furnizorii.',
  ],
  [
    Code2,
    'Enterprise Development',
    'Soluții software dezvoltate la comandă în zona proceselor documentare.',
  ],
]

function SolutionsHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10 bg-[#071326]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_38%)]" />
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

      <Container className="relative z-10 grid min-h-[78vh] items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
            <Network size={16} />
            Soluții software
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Soluții digitale pentru procese clare, conectate și scalabile.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            De la managementul documentelor și integrarea sistemelor până la
            aplicații enterprise custom, Extensys Solutions construiește soluții software
            care reduc complexitatea și oferă control operațional.
             Extensys dezvoltă soluții pentru organizații care lucrează intensiv
            cu documente, aprobări, contracte, furnizori și fluxuri operaționale
            care trebuie urmărite cap-coadă.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-2xl hover:shadow-orange-500/35"
            >
              Discută cu noi
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#overview"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/15 hover:text-orange-300 hover:shadow-2xl hover:shadow-black/20"
            >
              Vezi soluțiile
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-orange-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0F1E3A]/80 p-5">
              <div className="border-b border-white/10 pb-5">
                <h2 className="text-xl font-black text-white">Expertiză</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Direcții clare, unite prin aceeași zonă de competență:
                  documente, fluxuri și automatizare.
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {expertise.map(([Icon, title, text], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.35 + index * 0.08,
                      ease: 'easeOut',
                    }}
                    className="group flex gap-4 py-5"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/20 transition duration-300 group-hover:scale-105 group-hover:bg-orange-400/15">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-white transition group-hover:text-orange-200">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {text}
                      </p>
                    </div>
                  </motion.div>
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