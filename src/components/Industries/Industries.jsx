import { Building2, Factory, HeartPulse, Landmark } from 'lucide-react'
import Container from '../../layout/Container'

const industries = [
  [HeartPulse, 'Sănătate', 'Fluxuri documentare pentru spitale, clinici și unități sanitare.'],
  [Landmark, 'Instituții publice', 'Control, trasabilitate și arhivare pentru procese administrative.'],
  [Factory, 'Industrie', 'Documente operaționale, aprobări și colaborare între departamente.'],
  [Building2, 'Companii private', 'Procese digitale pentru organizații care vor eficiență și control.'],
]

function Industries() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Industrii
          </p>
          <h2 className="text-4xl font-extrabold text-[#0F1E3A]">
            Soluții pentru organizații cu procese documentare complexe.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-[#0F1E3A]">{title}</h3>
              <p className="leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Industries