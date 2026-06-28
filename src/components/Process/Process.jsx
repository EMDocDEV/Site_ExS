import {
  Archive,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FilePlus2,
  Send,
} from 'lucide-react'

import Container from '../../layout/Container'

const steps = [
  [
    FilePlus2,
    'Document nou',
    'Documentul este introdus în sistem și devine ușor de urmărit.',
  ],
  [
    ClipboardList,
    'Înregistrare',
    'Primește metadate, categorie, număr și context operațional.',
  ],
  [
    CheckCircle2,
    'Aprobare',
    'Urmează traseul stabilit, fără blocaje și fără pierderi de timp.',
  ],
  [
    Send,
    'Distribuire',
    'Ajunge automat la persoanele sau departamentele responsabile.',
  ],
  [
    Archive,
    'Arhivare',
    'Rămâne disponibil, sigur și ușor de găsit oricând.',
  ],
]

function Process() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Cum transformăm procesul
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-[#0F1E3A] lg:text-4xl">
            Documentul nu mai circulă haotic. Urmează un traseu clar.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            EMDoc transformă circuitul documentelor într-un proces digital,
            sigur și complet trasabil.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {steps.map(([Icon, title, text], index) => (
            <article
              key={title}
              className="group relative overflow-visible rounded-3xl border border-slate-200 bg-[#F7F9FC] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="absolute right-5 top-5 text-6xl font-black text-slate-100 transition group-hover:text-orange-50">
                0{index + 1}
              </div>

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1E3A] text-orange-400">
                <Icon size={26} />
              </div>

              <div className="relative mb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-orange-500">
              
              </div>

              <h3 className="relative mb-3 text-2xl font-extrabold text-[#0F1E3A]">
                {title}
              </h3>

              <p className="relative text-sm leading-7 text-slate-600">
                {text}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-16 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg lg:flex">
                  <ArrowRight size={16} />
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process