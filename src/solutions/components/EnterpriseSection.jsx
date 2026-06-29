import { motion } from 'framer-motion'
import {
  Code2,
  Workflow,
  Puzzle,
  Database,
  LayoutDashboard,
  Settings2,
  CheckCircle2,
} from 'lucide-react'
import Container from '../../layout/Container'

const enterpriseFeatures = [
  [
    Workflow,
    'Workflow-uri custom',
    'Modelăm fluxuri adaptate modului real de lucru al organizației.',
  ],
  [
    Puzzle,
    'Module dedicate',
    'Dezvoltăm funcționalități specifice pentru cerințe care nu sunt acoperite standard.',
  ],
  [
    Database,
    'Integrări cu sisteme existente',
    'Conectăm soluțiile dezvoltate cu aplicațiile și bazele de date deja utilizate.',
  ],
  [
    LayoutDashboard,
    'Dashboard-uri operaționale',
    'Oferim vizibilitate asupra proceselor, statusurilor și indicatorilor relevanți.',
  ],
  [
    Settings2,
    'Automatizări specifice',
    'Reducem operațiunile repetitive prin reguli, notificări și fluxuri automate.',
  ],
  [
    Code2,
    'Aplicații enterprise',
    'Construim platforme robuste, scalabile și adaptate proceselor documentare complexe.',
  ],
]

function EnterpriseSection() {
  return (
    <section id="enterprise" className="relative border-y border-white/10 bg-white/[0.03] py-24">
    <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[1.5px] w-430  bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Enterprise Development
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Software la comandă pentru procesele companiei tale.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Extensys Solutions este o companie producătoare de software.
              Atunci când procesele unui client depășesc soluțiile standard,
              dezvoltăm module, aplicații și integrări personalizate în aria
              noastră de expertiză: documente, fluxuri, aprobări, colaborare și
              automatizare. Dezvoltăm aplicații enterprise personalizate pentru
              organizații care au nevoie de platforme robuste, integrare cu
              sisteme existente și scalabilitate pe termen lung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
           >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0F1E3A]/80 p-5">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-lg font-black text-white">
                    Capabilități enterprise
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Dezvoltare software în zona documentelor, fluxurilor și
                    automatizării.
                  </p>
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-300 sm:flex">
                  <CheckCircle2 size={21} />
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {enterpriseFeatures.map(([Icon, label, text], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.42,
                      delay: index * 0.07,
                      ease: 'easeOut',
                    }}
                    className="group/item flex gap-4 rounded-2xl px-3 py-4 transition duration-300 hover:bg-white/[0.045]"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/20 transition duration-300 group-hover/item:scale-110 group-hover/item:bg-orange-400/15 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/20">

                      <Icon size={19} />
                    </div>

                    <div>
                      <h4 className="font-extrabold text-white transition duration-300 group-hover/item:text-orange-200">
                        {label}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default EnterpriseSection