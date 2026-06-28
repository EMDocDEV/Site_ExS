import { motion } from 'framer-motion'
import {
  Building2,
  FileCheck2,
  MailX,
  Eye,
  ShieldCheck,
  RefreshCcw,
  CheckCircle2,
} from 'lucide-react'
import Container from '../../layout/Container'

const smartConnectFeatures = [
  [
    Building2,
    'Colaborare controlată cu furnizorii',
    'Documentele sunt comunicate într-un portal dedicat, nu prin schimburi greu de urmărit.',
  ],
  [
    FileCheck2,
    'Schimb securizat de documente',
    'Contractele, actele adiționale și comenzile pot fi transmise și returnate în format controlat.',
  ],
  [
    Eye,
    'Status vizibil pentru beneficiar',
    'Organizația vede rapid unde se află documentul și ce acțiuni au fost realizate.',
  ],
  [
    ShieldCheck,
    'Trasabilitate pe fiecare document',
    'Fiecare interacțiune este urmărită, cu istoric clar între beneficiar și furnizor.',
  ],
  [
    MailX,
    'Fără documente pierdute pe email',
    'Reduce dependența de emailuri, atașamente multiple și versiuni greu de identificat.',
  ],
  [
    RefreshCcw,
    'Actualizare rapidă în EMDoc',
    'Documentele întoarse de la furnizori devin vizibile rapid în fluxul beneficiarului.',
  ],
]

function SmartConnectSection() {
  return (
    <section id="smart-connect" className="relative py-24">
    <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-250 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl lg:order-1"
            >
            <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0F1E3A]/80 p-5">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-lg font-black text-white">
                    Capabilități Smart Connect
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Funcționalități pentru comunicarea controlată cu partenerii
                    externi.
                  </p>
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-300 sm:flex">
                  <CheckCircle2 size={21} />
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {smartConnectFeatures.map(([Icon, label, text], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -18 }}
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

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              EMDoc B2B Smart Connect
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Portal securizat B2B pentru comunicarea documentelor cu
              furnizorii.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Smart Connect extinde fluxurile EMDoc în afara organizației.
              Contractele, actele adiționale sau comenzile pot fi transmise
              către furnizori, descărcate, semnate și încărcate înapoi, iar
              beneficiarul vede documentele actualizate în timp real.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default SmartConnectSection