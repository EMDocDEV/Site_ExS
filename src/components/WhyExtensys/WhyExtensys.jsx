import { Building2, Cog, ShieldCheck, Workflow } from 'lucide-react'
import Container from '../../layout/Container'

const items = [
  {
    icon: Building2,
    title: 'Experiență în procese enterprise',
    text: 'Construim soluții pentru organizații care au nevoie de control, trasabilitate și fluxuri digitale clare.',
  },
  {
    icon: Workflow,
    title: 'Automatizare reală',
    text: 'Transformăm procese manuale în fluxuri digitale eficiente, ușor de urmărit și administrat.',
  },
  {
    icon: Cog,
    title: 'Integrare cu sisteme existente',
    text: 'Soluțiile noastre pot fi conectate cu aplicațiile și infrastructura deja folosite în organizație.',
  },
  {
    icon: ShieldCheck,
    title: 'Securitate și conformitate',
    text: 'Punem accent pe acces controlat, audit, protecția datelor și respectarea regulilor interne.',
  },
]

function WhyExtensys() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            De ce Extensys
          </p>

          <h2 className="text-4xl font-extrabold text-[#0F1E3A]">
            Tehnologie construită pentru procese serioase.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Extensys Solutions dezvoltă aplicații software orientate către
            stabilitate, scalabilitate și rezultate măsurabile.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Icon size={28} />
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-[#0F1E3A]">
                {title}
              </h3>

              <p className="leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyExtensys