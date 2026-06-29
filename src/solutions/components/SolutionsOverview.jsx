import { motion } from 'framer-motion'
import { FileText, ShieldCheck, Users, Settings2 } from 'lucide-react'
import Container from '../../layout/Container'

const highlights = [
  ['Documente', 'procese centrate pe contracte, acte, comenzi și arhivare', FileText],
  ['Control', 'vizibilitate, audit și trasabilitate pe fiecare etapă', ShieldCheck],
  ['Colaborare', 'comunicare controlată cu furnizori și parteneri externi', Users],
  ['Adaptare', 'module și aplicații dezvoltate pe fluxurile clientului', Settings2],
]

function SolutionsOverview() {
  return (
    <section id="overview" className="relative border-b border-white/10 bg-[#071326] py-20">
      
      <div className="absolute inset-x-0 top-0 flex justify-center">
      <div className="h-[1.5px] w-430  bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
    </div>
  <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Portofoliu
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Soluții construite în jurul documentelor, aprobărilor și
            colaborării controlate.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Fiecare organizație are propriile fluxuri. De aceea, soluțiile
            Extensys pot fi utilizate separat sau combinate, în funcție de modul
            real de lucru al beneficiarului.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([title, text, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-orange-400/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/25"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/20 transition duration-300 group-hover:scale-110 group-hover:bg-orange-400/15">
                <Icon size={23} />
              </div>

              <h3 className="text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SolutionsOverview