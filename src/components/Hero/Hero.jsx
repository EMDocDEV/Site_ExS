import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FolderOpen,
  Search,
  Share2,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

import Container from '../../layout/Container'
import heroBg from '../../assets/images/hero-wow.jpg'

const heroParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1E3A] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061225]/99 via-[#061225]/75 to-[#061225]/5" />

      <Container className="relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          variants={heroParent}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={heroItem}
            className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-400"
          >
            Extensys Solutions
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="max-w-[650px] text-6xl font-black leading-[1.05] tracking-tight"
          >
            Transformăm birocrația în{' '}
            <span className="text-orange-500">procese digitale</span> clare.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white"
          >
            Construim soluții software enterprise pentru organizații care vor
            control, trasabilitate și eficiență în gestionarea documentelor și
            a fluxurilor operaționale.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_12px_35px_rgba(249,115,22,.35)]"
            >
              Solicită demo <ArrowRight size={18} />
            </a>

            <a
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/15"
            >
              Vezi soluțiile <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-3"
          >
            {[
              ['Procese clare', 'fără blocaje birocratice'],
              ['Trasabilitate', 'pentru fiecare acțiune'],
              ['Control complet', 'asupra documentelor'],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-orange-400" size={24} />
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm text-slate-200">{text}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.85, ease: 'easeOut' }}
          className="mt-45 rounded-[2rem] bg-white/92 p-8 text-[#0F1E3A] shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-xl lg:ml-auto lg:w-[460px]"
        >
          <h2 className="mb-7 text-2xl font-extrabold">
            Soluții pentru procese digitale
          </h2>

          <div className="space-y-6">
            {[
              [
                FileText,
                'EMDoc',
                'Transformă circuitul documentelor într-un proces digital, sigur și complet trasabil.',
              ],
              [
                Share2,
                'EMDoc B2B Smart Connect',
                'Extinde digitalizarea dincolo de organizație și conectează automat partenerii de afaceri.',
              ],
              [
                ShieldCheck,
                'Soluții enterprise',
                'Software construit pentru organizații cu procese complexe și cerințe reale de control.',
              ],
            ].map(([Icon, title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 1.05 + index * 0.12,
                  ease: 'easeOut',
                }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={23} />
                </div>
                <div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 1.2, ease: 'easeOut' }}
        className="relative bg-white py-7 text-[#0F1E3A]"
      >
        <Container className="grid gap-6 md:grid-cols-4">
          {[
            [Workflow, 'Fluxuri digitale', 'Documentele urmează trasee clare.'],
            [ShieldCheck, 'Control & audit', 'Fiecare acțiune este urmărită.'],
            [Search, 'Căutare rapidă', 'Informația este găsită instant.'],
            [
              FolderOpen,
              'Enterprise ready',
              'Pentru organizații cu procese complexe.',
            ],
          ].map(([Icon, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 1.35 + index * 0.08,
                ease: 'easeOut',
              }}
              className="flex items-start gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={22} />
              </div>
              <div>
                <div className="font-extrabold">{title}</div>
                <div className="text-sm text-slate-600">{text}</div>
              </div>
            </motion.div>
          ))}
        </Container>
      </motion.div>
    </section>
  )
}

export default Hero