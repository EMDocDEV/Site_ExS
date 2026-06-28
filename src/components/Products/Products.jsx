import {
  ArrowRight,
  FileText,
  FolderOpen,
  Handshake,
  ShieldCheck,
  Users,
  Code2,
  Workflow,
  Settings2,
} from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import Container from '../../layout/Container'
import { products } from '../../data/products'

const productVisuals = {
  emdoc: {
    route: '/solutions#emdoc',
    subtitle: 'Management electronic al documentelor',
    watermark: 'EMD',
    logoLine: 'Document Management',
    features: [
      [FileText, 'Fluxuri digitale'],
      [ShieldCheck, 'Trasabilitate completă'],
      [FolderOpen, 'Arhivare securizată'],
    ],
  },
  'emdoc-b2b-smartconnect': {
    route: '/solutions#smart-connect',
    subtitle: 'Conectează organizația cu partenerii de afaceri',
    watermark: 'B2B',
    logoLine: 'Smart Connect',
    features: [
      [Users, 'Portal B2B'],
      [Handshake, 'Colaborare eficientă'],
      [FileText, 'Schimb rapid de documente'],
    ],
  },
  enterprise: {
    route: '/solutions#enterprise',
    subtitle: 'Software la comandă pentru procese documentare complexe',
    watermark: 'ENTE',
    logoLine: 'Custom Software',
    features: [
      [Workflow, 'Workflow-uri custom'],
      [Settings2, 'Automatizări'],
      [Code2, 'Aplicații enterprise'],
    ],
  },
}

function Products() {
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[1.5px] w-[1900px] max-w-[85vw] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>

      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Produsele noastre
          </p>

          <h2 className="text-4xl font-extrabold text-[#0F1E3A]">
            Soluții software dezvoltate pentru procese reale de business.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Extensys Solutions dezvoltă produse software dedicate digitalizării,
            automatizării și conectării fluxurilor operaționale.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const visual = productVisuals[product.id]

            if (!visual) return null

            return (
              <HashLink
                key={product.id}
                smooth
                to={visual.route}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[#1f3558]/20 bg-[#0F1E3A] p-6 shadow-[0_18px_50px_rgba(15,30,58,.18)] transition duration-500 hover:-translate-y-2 hover:border-orange-400/60 hover:shadow-[0_26px_70px_rgba(249,115,22,.18)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.10),transparent_34%)]" />

                <div className="absolute -right-8 top-6 rotate-[18deg] text-[5.8rem] font-black leading-none text-white/[0.055] transition duration-500 group-hover:rotate-[10deg] group-hover:text-orange-400/10">
                  {visual.watermark}
                </div>

                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

                
                <div className="absolute bottom-0 left-0 h-14 w-full border-t border-orange-400/20 bg-white/95" />
                <div className="relative flex min-h-[285px] flex-col">
                  <div className="mb-6">
                    <div className="-rotate-1 text-2xl font-black tracking-tight text-white drop-shadow-sm transition duration-500 group-hover:rotate-0">
                      <span className="text-orange-500">E</span>
                      <span>MDoc</span>

                      {product.id === 'emdoc-b2b-smartconnect' && (
                        <span className="ml-2 text-orange-500">B2B</span>
                      )}
                    </div>

                    <div className="-mt-1 ml-12 text-base font-black uppercase tracking-tight text-white transition duration-500 group-hover:translate-x-1">
                      {visual.logoLine}
                    </div>
                  </div>

                  <div className="mt-2 h-[2px] w-14 rounded-full bg-orange-500 transition duration-500 group-hover:w-24" />

                  <p className="mt-7 min-h-[48px] max-w-sm text-sm leading-relaxed text-slate-200">
                    {visual.subtitle}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    {visual.features.map(([Icon, label]) => (
                      <div
                        key={label}
                        className="flex flex-col items-center border-r border-white/20 px-2 last:border-r-0"
                      >
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400 shadow-sm transition duration-300 group-hover:border-orange-400/60 group-hover:bg-orange-500/15 group-hover:shadow-[0_0_18px_rgba(249,115,22,.18)]">
                          <Icon size={17} strokeWidth={2.2} />
                        </div>

                        <p className="text-[11px] font-semibold leading-5 text-slate-100">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-auto flex justify-end pt-5">
                    <div className="inline-flex items-center gap-2 font-extrabold text-orange-600 transition duration-300 group-hover:text-orange-500">
                      Vezi soluția
                      <ArrowRight
                        size={18}
                        className="transition duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </HashLink>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Products