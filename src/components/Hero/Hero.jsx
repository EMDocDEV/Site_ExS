import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FolderOpen,
  Lock,
  ScanLine,
  Search,
  ShieldCheck,
} from 'lucide-react'

import Container from '../../layout/Container'

function FloatingDocument({ className, icon: Icon, label, color }) {
  return (
    <div className={`absolute rounded-2xl border border-white/25 bg-white/90 p-4 shadow-2xl backdrop-blur ${className}`}>
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
        <Icon size={22} />
      </div>
      <div className="h-2 w-20 rounded bg-slate-300" />
      <div className="mt-2 h-2 w-14 rounded bg-orange-400" />
      <p className="mt-3 text-xs font-bold text-slate-700">{label}</p>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1E3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(249,115,22,0.22),transparent_22%),radial-gradient(circle_at_60%_45%,rgba(59,130,246,0.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,30,58,0.98),rgba(15,30,58,0.72),rgba(15,30,58,0.45))]" />

      <Container className="relative grid min-h-[680px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-400">
            Extensys Solutions
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight lg:text-6xl">
            Software enterprise pentru procese digitale inteligente.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Dezvoltăm soluții software dedicate managementului documentelor,
            automatizării fluxurilor de lucru și integrării sistemelor de business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Solicită demo <ArrowRight size={18} />
            </a>

            <a
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Vezi soluțiile <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-3">
            {[
              ['Soluții enterprise', 'pentru procese critice'],
              ['Integrare rapidă', 'cu sisteme existente'],
              ['Control total', 'asupra fluxurilor digitale'],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-orange-400" size={24} />
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm text-slate-300">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden h-[520px] lg:block">
          <div className="absolute bottom-10 left-6 right-6 h-64 rounded-3xl border border-white/15 bg-slate-950/60 shadow-2xl backdrop-blur">
            <div className="mx-auto mt-8 h-40 w-72 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-blue-200/70" />
                <div className="h-3 w-12 rounded bg-orange-400" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-white/10" />
                <div className="h-20 rounded-xl bg-white/20" />
                <div className="h-20 rounded-xl bg-white/10" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0">
            <div className="absolute left-[42%] top-[22%] h-56 w-56 rounded-full border border-blue-300/30" />
            <div className="absolute left-[50%] top-[30%] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.9)]" />
            <div className="absolute left-[28%] top-[42%] h-2 w-2 rounded-full bg-orange-400" />
            <div className="absolute left-[68%] top-[18%] h-2 w-2 rounded-full bg-orange-400" />
            <div className="absolute left-[72%] top-[52%] h-2 w-2 rounded-full bg-orange-400" />
          </div>

          <FloatingDocument
            className="left-6 top-20 rotate-[-8deg]"
            icon={FileText}
            label="PDF"
            color="bg-red-50 text-red-600"
          />

          <FloatingDocument
            className="right-10 top-16 rotate-[7deg]"
            icon={FolderOpen}
            label="DOC"
            color="bg-blue-50 text-blue-700"
          />

          <FloatingDocument
            className="left-28 bottom-32 rotate-[4deg]"
            icon={ScanLine}
            label="SCAN"
            color="bg-slate-100 text-slate-700"
          />

          <FloatingDocument
            className="right-24 bottom-28 rotate-[-5deg]"
            icon={Search}
            label="OCR"
            color="bg-orange-50 text-orange-600"
          />
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0F1E3A] shadow-2xl lg:absolute lg:right-8 lg:top-24 lg:w-[420px]">
          <h2 className="mb-6 text-2xl font-extrabold">
            Produse dezvoltate de Extensys Solutions
          </h2>

          <div className="space-y-5">
            {[
              [
                FolderOpen,
                'EMDoc',
                'Sistem complet pentru managementul electronic al documentelor.',
              ],
              [
                ShieldCheck,
                'EMDoc B2B Smart Connect',
                'Conectare și schimb automatizat de documente între parteneri.',
              ],
              [
                Lock,
                'Soluții custom',
                'Dezvoltare software adaptată proceselor interne ale companiei.',
              ],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero