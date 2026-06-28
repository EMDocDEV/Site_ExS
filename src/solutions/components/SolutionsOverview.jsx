import { motion } from 'framer-motion'
import { FileText, PlugZap, Building2, ArrowRight } from 'lucide-react'
import Container from '../../layout/Container'

const items = [
  {
    icon: FileText,
    title: 'EMDoc',
    text: 'Management electronic al documentelor, fluxuri de aprobare și arhivare digitală securizată.',
    href: '/solutions/emdoc',
  },
  {
    icon: PlugZap,
    title: 'Smart Connect',
    text: 'Integrare între ERP, CRM, aplicații interne și fluxuri automate de date.',
    href: '/solutions/emdoc-b2b-smartconnect',
  },
  {
    icon: Building2,
    title: 'Soluții Enterprise',
    text: 'Platforme software custom pentru procese complexe, raportare și automatizare.',
    href: '/contact',
  },
]

function SolutionsOverview() {
  return (
    <section id="overview" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Portofoliu
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Soluții pentru companii care vor mai mult decât digitalizare.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Construim ecosisteme software care simplifică procesele, conectează
            departamentele și oferă vizibilitate operațională.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                  Detalii soluție
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SolutionsOverview